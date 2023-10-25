import { likeBlog } from "@/controllers/likeController";
import Router from "express-promise-router";

const router = Router();

/**
 * @openapi
 * '/likes/':
 *  post:
 *    tags:
 *      - Likes
 *    summary: Add like or remove it if it already exists on a blog
 *    description: add a like or remove it.
 *    security:
 *      - apiAuth: []
 *    requestBody:
 *      description: Requests 2 properties which are given below and uuid is added by default
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *           type: object
 *           properties:
 *             userId:
 *               type: string
 *             blogId:
 *               type: string
 *    responses:
 *      200:
 *        description: On successful account creation return the user object with status code of 200 
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  status:
 *                    type: boolean
 *      404:
 *        description: Not Found /mostly due to wrong path or method used
 *      500:
 *        description: Internal server Error, occurs mostly when porperty names are wrong OR Data type of property is wrongly entered
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                stack:
 *                  type: string
 *                  description: stack trace for detailed description of error
 */
router.post("/",likeBlog);


export default router;
