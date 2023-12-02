const { Job, User } = require("../models");

module.exports = {
  findAllJob: async (req, res) => {
    try {
      if (!Job || !Job.findAll) {
        throw new Error("Job model or its methods not found");
      }
      const result = await Job.findAll();
      res.status(200).json({
        message: "Get All Data",
        data: result,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  findAllJobsByUserId: async (req, res) => {
    try {
      const users_id = req.userData.userId;
      const result = await Job.findAll({ where: { users_id: users_id } });
      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  showJobById: async (req, res) => {
    try {
      const { id } = req.params;
      const job = await Job.findOne({
        where: {
          id: id,
        },
      });

      if (!job) {
        return res.status(404).json({
          message: `Job with id ${id} not found.`,
        });
      }

      res.status(200).json({
        message: `Success get job with id ${id}`,
        data: job,
      });
    } catch (error) {
      res.status(500).json({ message: "Internal server Error" });
    }
  },

  editJob: async (req, res) => {
    try {
      const { id } = req.params;
      const { job_name, type, category, requirement, description, required_skill, salary } = req.body;

      const job = await Job.findOne({
        where: {
          id: id,
        },
      });

      if (!job) {
        return res.status(404).json({
          message: `Job with id ${id} not found.`,
        });
      }

      const updatedJob = await Job.update(
        {
          job_name: job_name,
          type: type,
          category: category,
          requirement: requirement,
          description: description,
          required_skill: required_skill,
          salary: salary,
        },
        {
          where: {
            id: id,
          },
        }
      );

      res.status(200).json({
        message: `Success update job with id ${id}`,
        data: updatedJob,
      });
    } catch (error) {
      res.status(500).json({ message: "Internal server Error" });
    }
  },

  createJob: async (req, res) => {
    try {
      const users_id = req.userData.userId;
      const { job_name, type, category, requirement, description, required_skill, salary } = req.body; // Ambil data dari body permintaan

      // Buat job baru di database
      const newJob = await Job.create({
        users_id: users_id,
        job_name: job_name,
        type: type,
        category: category,
        requirement: requirement,
        description: description,
        required_skill: required_skill,
        salary: salary,
      });

      res.status(201).json({
        message: "Job created successfully",
        data: newJob,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Internal server error",
      });
    }
  },

  filterJobsByType: async (req, res) => {
    try {
      const { type } = req.params;
      const typeJob = await Job.findAll({
        attributes: ["job_name", "type", "category", "requirement", "description", "required_skill", "salary"],
        where: {
          type: type,
        },
      });

      const rowCount = typeJob.length;

      if (rowCount === 0) {
        return res.status(404).json({
          message: `No jobs found for type ${type} in the database.`,
        });
      }

      res.status(200).json({
        message: `Success get all jobs for type ${type}`,
        data: typeJob,
      });
    } catch (err) {
      if (err.name === "SequelizeDatabaseError") {
        return res.status(404).json({
          message: `The Type is not a valid enum value.`,
        });
      }

      res.status(500).json({
        message: "Internal server error",
        error: err,
      });
    }
  },

  filterJobsByCategory: async (req, res) => {
    try {
      const { category } = req.params;
      const categoryJob = await Job.findAll({
        attributes: ["job_name", "type", "category", "requirement", "description", "required_skill", "salary"],
        where: {
          category: category,
        },
      });

      const rowCount = categoryJob.length;

      if (rowCount === 0) {
        return res.status(404).json({
          message: `No jobs found for category ${category} in the database.`,
        });
      }

      res.status(200).json({
        message: `Success get all jobs for category ${category}`,
        data: categoryJob,
      });
    } catch (err) {
      res.status(500).json({
        message: "Internal server error",
        error: err,
      });
    }
  },

  deleteJob: async (req, res) => {
    try {
      const { id } = req.params;
      const deleteJob = await Job.destroy({
        where: { id: id },
      });

      if (deleteJob > 0) {
        return res.status(200).json({ message: `Job with id ${id} deleted!` });
      } else {
        return res.status(404).json({ message: `Job with id ${id} not found.` });
      }
    } catch (err) {
      res.status(500).json({
        message: "Internal server error",
        error: err,
      });
    }
  },

  showCompanyByJob: async (req, res) => {
    try {
      const { id } = req.params;
      const showCompany = await Job.findOne({
        include: [
          {
            model: User,
            attributes: {
              exclude: ["password"],
            },
          },
        ],
        where: {
          id: id,
        },
      });
      res.status(200).json({
        message: "Get data jobs and company",
        data: showCompany,
      });
    } catch (err) {
      res.status(500).json({
        message: "Internal server error",
        error: err,
      });
    }
  },
};
