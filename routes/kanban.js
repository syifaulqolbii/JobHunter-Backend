const express = require('express');
const router = express.Router();
const kanbanController = require('../controllers/kanbanController');
const {authenticate, authorize} = require('../middleware/authMiddleware');

router.get('/',authenticate,authorize(["company"]), kanbanController.findAllKanbans);
router.post('/:id', authenticate, authorize(["company"]), kanbanController.addKanban);
router.patch('/edit/:id', authenticate, authorize(["company"]), kanbanController.editStatusKanban);
router.get('/countJob', authenticate, authorize(["company"]), kanbanController.getCountJobList);
router.get('/countApplicant', authenticate, authorize(["company"]), kanbanController.getCountAppliedJob);
router.get('/countPending', authenticate, authorize(["company"]), kanbanController.getCountPendingAppliedJob);

/**
 * @swagger
 * components:
 *  schemas:
 *      Kanban:
 *          type: object
 *          required:
 *              - users_id
 *              - jobs_id
 *              - status
 *          properties:
 *              users_id:
 *                  type: integer
 *                  description: User Id
 *              jobs_id:
 *                  type: integer
 *                  description: Job Id
 *              status:
 *                  description: Status of Kanban
 *                  enum: [applied, accepted, rejected]
 *                  type: string
 *          example:
 *              users_id: 1
 *              jobs_id: 1
 *              status: applied
 */

/**
 * @swagger
 * tags:
 *  name: Kanban
 *  description: Kanban API
 * /kanbans:
 *  get:
 *      summary: Get All Kanban
 *      tags: [Kanban]
 *      responses:
 *          200:
 *              description: Success Get All Kanban
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Kanban'
 *          500:
 *              description: Internal Server Error
 *
 * /kanbans/{id}:
 *  post:
 *      summary: Add Kanban
 *      tags: [Kanban]
 *      parameters:
 *          -   in: path
 *              name: id
 *              required: true
 *              description: Job Id
 *              type: integer
 *              format: int64
 *      responses:
 *          200:
 *              description: Success Add Kanban
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Kanban'
 *          500:
 *              description: Internal Server Error
 *
 * /kanbans/edit/{id}:
 *  patch:
 *      summary: Edit Status Kanban
 *      tags: [Kanban]
 *      parameters:
 *          -   in: path
 *              name: id
 *              required: true
 *              description: Kanban Id
 *              type: integer
 *              format: int64
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          status:
 *                              type: string
 *                              enum: [applied, accepted, rejected]
 *                              description: Status of Kanban
 *                              example: accepted
 *                      required:
 *                          - status
 *                  example:
 *                      status: accepted
 *      responses:
 *       '200':
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Indicates the result of the operation
 *                 data:
 *                   $ref: '#/definitions/Kanban'
 *       '500':
 *          description: Internal Server Error
 */


module.exports = router;