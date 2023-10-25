import { addTagsToBlog, getAlltags,createNewTag } from "@/controllers/tagController";
import Router from "express-promise-router";

const router = Router();


/**
 * @openapi
 * '/tags/':
 *  post:
 *    tags:
 *      - Tags
 *    summary: add a new tag to a blog
 *    security:
 *      - apiAuth: []
 *    requestBody:
 *      description: requests 2 properties tagId,blogId 
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *           type: object
 *           properties:
 *             tagId:
 *               type: string
 *             blogId:
 *               type: string
 *    responses:
 *      200:
 *        description: On success tags are added to blog
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                id:
 *                  type: string
 *                tagId:
 *                  type: string
 *                blogId:
 *                  type: string
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
router.post("/",addTagsToBlog);

/**
 * @openapi
 * '/tags/add':
 *  post:
 *    tags:
 *      - Tags
 *    summary: add a new tag to tags list
 *    security:
 *      - apiAuth: []
 *    requestBody:
 *      description: requests 1 properties tagTitle
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *           type: object
 *           properties:
 *             tagTitle:
 *               type: string
 *    responses:
 *      200:
 *        description: On new tag is created 
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                tagId:
 *                  type: string
 *                tagTitle:
 *                  type: string
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
router.post("/add",createNewTag); 

/**
 * @openapi
 * '/tags/':
 *  get:
 *    tags:
 *      - Tags
 *    summary: get a list of tags objects
 *    security:
 *      - apiAuth: []
 *    responses:
 *      200:
 *        description: On successful list of tags objects with status code of 200 is returned
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                tagId:
 *                  type: string
 *                tagTitle:
 *                  type: string
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
router.get("/",getAlltags)

export default router;

