const express = require("express");
const router = express.Router();
const jobController = require("../controllers/job");
const { authenticate, authorize } = require("../middleware/authMiddleware");

/**
 * @swagger
 * components:
 *    schemas:
 *      Job:
 *          type: object
 *          required:
 *              - id
 *              - users_id
 *              - job_name
 *          properties:
 *              id:
 *                  type: integer
 *                  description: the auto-generated id of job
 *              users_id:
 *                  type: integer
 *                  description: the id of the user job
 *              job_name:
 *                  type: string
 *                  description: the name of the job
 *              type:
 *                  type: string
 *                  enum:
 *                      - fulltime
 *                      - parttime
 *                      - freelance
 *                  description: the type of the job
 *              category:
 *                  type: string
 *                  description: the category of the job
 *              requirement:
 *                  type: string
 *                  description: the requirement of the job
 *              description:
 *                  type: string
 *                  description: the description of the job
 *              required_skill:
 *                  type: string
 *                  description: the requirement skill of the job
 *              salary:
 *                  type: string
 *                  description: the salary of the job
 *              createdAt:
 *                  type: string
 *                  format: date
 *                  description: the date created of the job
 *              updatedAt:
 *                  type: string
 *                  format: date
 *                  description: the date updated of the job
 *          example:
 *              id: 1
 *              users_id: 2
 *              job_name: Frontend Developer
 *              type: fulltime
 *              category: IT
 *              requirement: S1
 *              description: Membuat aplikasi web dengan menggunakan HTML, CSS, dan Javascript
 *              required_skill: HTML, CSS, Javascript
 *              salary: Rp. 10.000.000
 *              createdAt: 2023-11-09T13:26:09.782Z
 *              updatedAt: 2023-11-09T13:26:09.782Z
 *
 *
 */

/**
 * @swagger
 * tags:
 *      name: Jobs
 *      description: The job managing API
 * /api/v1/jobs:
 *      get:
 *          summary: Show All Job
 *          tags: [Jobs]
 *          responses:
 *              200:
 *                  description: All Jobs
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Job'
 *              500:
 *                  description: some server error
 */

/**
 * @swagger
 *
 * /api/v1/jobs/{users_id}:
 *   get:
 *     summary: Show all jobs by user ID
 *     tags:
 *       - Jobs
 *     parameters:
 *       - in: path
 *         name: users_id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the user job
 *     responses:
 *       200:
 *         description: All jobs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Job'
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 *
 * /api/v1/jobs:
 *      post:
 *          summary: Create a Job
 *          tags: [Jobs]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Job'
 *          responses:
 *              200:
 *                  description: All Jobs
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Job'
 *              500:
 *                  description: some server error
 */

/**
 * @swagger
 *
 * /api/v1/jobs/type/{type}:
 *   get:
 *     summary: Filter jobs by type
 *     tags:
 *       - Jobs
 *     parameters:
 *       - in: path
 *         name: type
 *         required: true
 *         schema:
 *           type: string
 *           enum: [fulltime, parttime, freelance]
 *         description: The type of the job
 *     responses:
 *       200:
 *         description: Success get all jobs for type {type}
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Job'
 *       404:
 *         description: No jobs found for type {type} in the database.
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/jobs/category/{category}:
 *   get:
 *     summary: Filter jobs by category
 *     tags:
 *       - Jobs
 *     parameters:
 *       - in: path
 *         name: category
 *         required: true
 *         schema:
 *           type: string
 *         description: The category of the job
 *     responses:
 *       200:
 *         description: Success get all jobs for category {category}
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Job'
 *       404:
 *         description: No jobs found for category {category} in the database.
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/jobs/{id}:
 *   delete:
 *     summary: Delete a job by ID
 *     tags:
 *       - Jobs
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the job to delete
 *     responses:
 *       200:
 *         description: Job with ID {id} deleted!
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Job'
 *       404:
 *         description: Job with ID {id} not found.
 *       500:
 *         description: Internal server error
 */

// Definisikan rute untuk mendapatkan semua pengguna
router.get("/", jobController.findAllJob);
// Definisikan rute untuk mendapatkan semua pekerjaan berdasarkan user_id
router.get("/company/:id", jobController.findAllJobsByUserId);
router.post("/", authenticate, authorize(["company"]), jobController.createJob);
router.get("/:id", jobController.showJobById);
router.patch("/:id", authenticate, authorize(["company"]), jobController.editJob);
router.get("/type/:type", jobController.filterJobsByType);
router.get("/category/:category", jobController.filterJobsByCategory);
router.get("/showCompanyByJob/:id", jobController.showCompanyByJob);
router.delete("/:id", authenticate, authorize(["company"]), jobController.deleteJob);

module.exports = router;
