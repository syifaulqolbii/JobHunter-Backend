const { Job } = require('../models');


module.exports = {
    findAllJob: async (req, res) => {
        try {
            if (!Job || !Job.findAll) {
                throw new Error('Job model or its methods not found');
            }
            const result = await Job.findAll()
            res.status(200).json({
                message: 'Get All Data',
                data: result
            });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Internal server error' });
        }
    },

    findAllJobsByUserId : async (req, res) => {
        
        try {
          const users_id = req.params.id;
          const result = await Job.findAll({ where: { users_id: users_id } });
          res.json(result);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Internal server error' });
        }
      },

      createJob : async (req, res) => {
        try {
          const {
            users_id,
            job_name,
            type,
            category,
            requirement,
            description,
            required_skill,
            salary
          } = req.body; // Ambil data dari body permintaan
      
          // Buat job baru di database
          const newJob = await Job.create({
            users_id: users_id,
            job_name: job_name,
            type: type,
            category: category,
            requirement: requirement,
            description: description,
            required_skill: required_skill,
            salary: salary
          });
      
          res.status(201).json({
            message: 'Job created successfully',
            data: newJob
          });
        } catch (error) {
          console.error(error);
          res.status(500).json({
            message: 'Internal server error'
          });
        }
      }
      
}