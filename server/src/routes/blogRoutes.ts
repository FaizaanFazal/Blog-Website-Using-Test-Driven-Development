import { addblog, getFeatured, getallblogs, getblogbyid } from "@/controllers/blogController";
import Router from "express-promise-router";

const router = Router();

/**
 * @openapi
 * '/blogs/add':
 *  post:
 *    tags:
 *      - Blogs
 *    summary: add a new blog
 *    description: Create new blog with title,imgSrc,imageAlt,content,featured status, and slug other porperties are added automatically
 *    security:
 *      - apiAuth: []
 *    requestBody:
 *      description: requests 6 properties title,imgSrc,imageAlt,content,featured status, and slug 
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *             imageSrc:
 *               type: string
 *             imageAlt:
 *               type: string
 *             content:
 *               type: string
 *             featured:
 *               type: boolean
 *             slug:
 *               type: string
 *    responses:
 *      200:
 *        description: On successful account creation return the user object with status code of 200 
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                id:
 *                  type: string
 *                title:
 *                  type: string
 *                imageSrc:
 *                  type: string
 *                imageAlt:
 *                  type: string
 *                content:
 *                  type: string
 *                featured:
 *                  type: boolean
 *                slug:
 *                  type: string
 *                createdAt:
 *                  type: string
 *                updatedAt:
 *                  type: string
 *                likes:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      userId:
 *                        type: string
 *                      blogId:
 *                        type: string
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
router.post("/add",addblog);

/**
 * @openapi
 * '/blogs/all':
 *  get:
 *    tags:
 *      - Blogs
 *    summary: get all blogs
 *    description: get all blogs each with title,imgSrc,imageAlt,content,featured status, and slug other porperties
 *    security:
 *      - apiAuth: []
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
 *                  id:
 *                    type: string
 *                  title:
 *                    type: string
 *                  imageSrc:
 *                    type: string
 *                  imageAlt:
 *                    type: string
 *                  content:
 *                    type: string
 *                  featured:
 *                    type: boolean
 *                  slug:
 *                    type: string
 *                  createdAt:
 *                    type: string
 *                  updatedAt:
 *                    type: string
 *                  likes:
 *                    type: array
 *                    items:
 *                      type: object
 *                      properties:
 *                        userId:
 *                          type: string
 *                        blogId:
 *                          type: string
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
router.get("/all",getallblogs);


/**
 * @openapi
 * '/blogs/featured':
 *  get:
 *    tags:
 *      - Blogs
 *    summary: get featured blogs list
 *    description: get all blogs with featured value set to true. Each with title,imgSrc,imageAlt,content,featured status, and slug other porperties
 *    security:
 *      - apiAuth: []
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
 *                  id:
 *                    type: string
 *                  title:
 *                    type: string
 *                  imageSrc:
 *                    type: string
 *                  imageAlt:
 *                    type: string
 *                  content:
 *                    type: string
 *                  featured:
 *                    type: boolean
 *                  slug:
 *                    type: string
 *                  createdAt:
 *                    type: string
 *                  updatedAt:
 *                    type: string
 *                  likes:
 *                    type: array
 *                    items:
 *                      type: object
 *                      properties:
 *                        userId:
 *                          type: string
 *                        blogId:
 *                          type: string
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
router.get("/featured",getFeatured);


/**
 * @openapi
 * '/blogs/{slug}':
 *  get:
 *    tags:
 *      - Blogs
 *    summary: get featured blogs list
 *    description: get all blogs with featured value set to true. Each with title,imgSrc,imageAlt,content,featured status, and slug other porperties
 *    security:
 *      - apiAuth: []
 *    parameters:
 *      - in: path
 *        name: slug
 *        schema:
 *          type: string
 *          schema:
 *            type:string
 *          description: Slug to get a certain post
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
 *                  id:
 *                    type: string
 *                  title:
 *                    type: string
 *                  imageSrc:
 *                    type: string
 *                  imageAlt:
 *                    type: string
 *                  content:
 *                    type: string
 *                  featured:
 *                    type: boolean
 *                  slug:
 *                    type: string
 *                  createdAt:
 *                    type: string
 *                  updatedAt:
 *                    type: string
 *                  likes:
 *                    type: array
 *                    items:
 *                      type: object
 *                      properties:
 *                        userId:
 *                          type: string
 *                        blogId:
 *                          type: string
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
router.get("/:slug",getblogbyid);


export default router