const express = require('express');
const router = express.Router();
const job = require('../controllers/job');

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
 *                  type: string
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
 *      name: Job
 *      description: The job managing API
 * /jobs:
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
 * /jobs/{id}:
 *      get:
 *          summary: Show All Job by users_id
 *          tags: [Jobs]
 *          parameters:
 *              - in: path
 *              name: users_id
 *              required: true
 *              schema:
 *                  type: integer
 *              description: the id of the user job
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
 * /jobs:
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

// Definisikan rute untuk mendapatkan semua pengguna
router.get('/', job.findAllJob);

// Definisikan rute untuk mendapatkan semua pekerjaan berdasarkan user_id
router.get('/:id', job.findAllJobsByUserId);

router.post('/', job.createJob);

module.exports = router;