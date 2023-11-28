const {kanban, User, Job} = require("../models");

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
                    },
                ],
                attributes: {
                    exclude: ["createdAt", "updatedAt"],
                    include: ["id"]
                },
                where: {
                    users_id: req.userData.userId
                }
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
            const result = await kanban.findAll({
                where: {
                    users_id: req.userData.userId,
                }
            });

            const count = result.length;
            res.status(200).json({
                message: 'Success Count Data Applied Job',
                data: count
            });

        } catch (error) {
            res.status(500).json({
                message: `Internal Server Error` + error,
            });
        }
    },
    getCountPendingAppliedJob: async (req, res) => {
        try  {
            const result = await kanban.findAll({
                where: {
                    users_id: req.userData.userId,
                    status: 'applied'
                }
            });

            const count = result.length;
            res.status(200).json({
                message: 'Success Count Data Pending Applied Job',
                data: count
            });

        } catch (error) {
            res.status(500).json({
                message: `Internal Server Error` + error,
            });
        }
    }
}