const {kanban, User, Job} = require("../models");
const { Sequelize, DataTypes, Op } = require('sequelize');
const sequelizeConfig = require('../config/config.json');
const sequelize = new Sequelize(sequelizeConfig.development);

module.exports = {
    findAllKanbans: async (req, res) => {
        try {
            const result = await kanban.findAll({
                include: [
                    {
                        model: User,
                        attributes: {
                            exclude: ["password", "createdAt", "updatedAt"],
                        },
                    },
                    {
                        model: Job,
                        attributes: {
                            exclude: ["createdAt", "updatedAt"],
                        },
                        include: [
                            {
                                model: User,
                                attributes: ["name"], // Include only the 'name' attribute of the user who created the job
                            },
                        ],
                    },
                ],
                attributes: {
                    exclude: ["createdAt", "updatedAt"],
                    include: ["id"],
                },
                where: {
                    users_id: req.userData.userId,
                },
            });

            res.status(200).json({
                message: 'Get All Data',
                data: result
            });
        } catch (error) {
            res.status(500).json({
                message: `Internal Server Error` + error,
            });
        }
    },
    findKanbanByCompanyId: async (req, res) => {
        try {
            const result = await kanban.findAll({
                include: [
                    {
                        model: User,
                        attributes: {
                            exclude: ["password", "createdAt", "updatedAt"],
                        },
                    },
                    {
                        model: Job,
                        attributes: {
                            exclude: ["createdAt", "updatedAt"],
                        },
                        include: [
                            {
                                model: User,
                                attributes: {
                                    exclude: ["password", "createdAt", "updatedAt"],
                                },
                                where: {
                                    id: req.userData.userId  // Filtering jobs owned by the logged-in user
                                },
                            },
                        ],
                    },
                ],
                attributes: {
                    exclude: ["createdAt", "updatedAt"],
                    include: ["id"]
                },
                where: {
                    // Adjust this condition based on your actual kanban model
                    // to match jobs posted by the logged-in user
                    // Example: jobs_id should match the jobs posted by the logged-in user
                    jobs_id: {
                        [Op.in]: sequelize.literal(
                            `(select id from "Jobs" where users_id = ${req.userData.userId})`
                        ),
                    },
                },
            });
            await sequelize.close();
            res.status(200).json({
                message: 'Get All Data',
                data: result
            });
        }catch (error) {
            res.status(500).json({
                message: `Internal Server Error` + error,
            });
        }
    },
    addKanban: async (req, res) => {
        try {
            const id = req.params.id;
            const userId = req.userData.userId;
            const result = await kanban.create({
                users_id: userId,
                jobs_id: id,
            });
            res.status(200).json({
                message: 'Success Add Data',
                data: result
            });
        } catch (error) {
            res.status(500).json({
                message: `Internal Server Error` + error,
            });
        }
    },
    editStatusKanban : async (req, res) => {
        try {
            const id = req.params.id;
            const result = await kanban.update({
                status: req.body.status
            }, {
                where: {
                    id
                }
            });
            res.status(200).json({
                message: 'Success Edit Data',
            });
        } catch (error) {
            res.status(500).json({
                message: `Internal Server Error` + error,
            });
        }
    },
    getCountJobList: async (req, res) => {
        try  {
            const result = await Job.findAll({
                where: {
                    users_id: req.userData.userId
                }
            });

            const count = result.length;
            res.status(200).json({
                message: 'Success Count Data Job',
                data: count
            });

        } catch (error) {
            res.status(500).json({
                message: `Internal Server Error` + error,
            });
        }
    },
    getCountAppliedJob: async (req, res) => {
        try  {
            const result = await kanban.count({
                include: [
                    {
                        model: Job,
                        attributes: [], // Exclude job attributes from the result
                        where: {
                            users_id: req.userData.userId, // Assuming this is the user who posted the job
                        },
                    },
                ],
            });

            res.status(200).json({
                message: 'Success Count Data Applied Job',
                data: result
            });

        } catch (error) {
            res.status(500).json({
                message: `Internal Server Error` + error,
            });
        }
    },
    getCountPendingAppliedJob: async (req, res) => {
        try  {
            const result = await kanban.count({
                where: {
                    status: 'applied',
                    jobs_id: {
                        [Op.in]: sequelize.literal(
                            `(SELECT id FROM "Jobs" WHERE users_id = ${req.userData.userId})`
                        ),
                    },
                },
            });

            res.status(200).json({
                message: 'Success Count Data Pending Applied Job',
                data: result
            });

        } catch (error) {
            res.status(500).json({
                message: `Internal Server Error` + error,
            });
        }
    }
}