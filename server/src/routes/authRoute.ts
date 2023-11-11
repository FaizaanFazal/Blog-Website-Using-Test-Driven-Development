import { getAllUsers, getToken, login, logout, register } from "@/controllers/authController";
import Router from "express-promise-router";

const router = Router();

/**
 * @openapi
 * '/users/register':
 *  post:
 *    tags:
 *      - Users
 *    summary: Create a new account
 *    description: Create new Account with email,userName and password, other porperties are added automatically
 *    security:
 *      - apiAuth: []
 *    requestBody:
 *      description: contains  5 properties email,userName, password,authorImageSrc,authorImageAlt
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *             userName:
 *               type: string
 *             password:
 *               type: string
 *             verified:
 *               type: boolean
 *             authorImageSrc:
 *               type: string
 *             authorImageAlt:
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
 *                  description: uid of user
 *                email:
 *                  type: string
 *                  description: email of user that is unique
 *                userName:
 *                  type: string
 *                  description: userName of user
 *                password:
 *                  type: string
 *                  description: password of user
 *                verified:
 *                  type: boolean
 *                  description: verified status false or ture, by default set to false
 *                authorImageSrc:
 *                  type: string
 *                  description: password of user
 *                authorImageAlt:
 *                  type: string
 *                  description: date at which user was  created
 *                createdAt:
 *                  type: string
 *                  description: date at which user was  created
 *                updatedAt:
 *                  type: string
 *                  description: date at which user was  created
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
router.post("/register",register);
 
/**
 * @openapi
 * '/users/login':
 *  post:
 *    tags:
 *      - Users
 *    summary: Login to account
 *    description: login with email,password, other porperties are added automatically
 *    security:
 *      - apiAuth: []
 *    requestBody:
 *      description: contains two items email, password
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *              password:
 *                type: string
 *    responses:
 *      200:
 *        description: On success user account object is returned with  status code of 200 
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                id:
 *                  type: string
 *                  description: uid of user
 *                email:
 *                  type: string
 *                  description: email of user that is unique
 *                userName:
 *                  type: string
 *                  description: userName of user
 *                password:
 *                  type: string
 *                  description: password of user
 *                verified:
 *                  type: boolean
 *                  description: verified status false or ture, by default set to false
 *                authorImageSrc:
 *                  type: string
 *                  description: password of user
 *                authorImageAlt:
 *                  type: string
 *                  description: date at which user was  created
 *                createdAt:
 *                  type: string
 *                  description: date at which user was  created
 *                updatedAt:
 *                  type: string
 *                  description: date at which user was  created
 *      500:
 *        description: Internal server Error, occurs mostly when porperty names are wrong OR Data type of property is wrongly entered
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                stack:
 *                  type: string
 *                  description: stack trace for detailed checking
 */
router.post("/login",login);

/**
 * @openapi
 * '/users/logout':
 *  post:
 *    tags:
 *      - Users
 *    summary: Logout of account
 *    description: logout clears all cookies
 *    security:
 *      - apiAuth: []
 *    responses:
 *      200:
 *        description: On success Logged out message with  status code of 200 
 *      500:
 *        description: Internal server Error, occurs mostly when porperty names are wrong OR Data type of property is wrongly entered
 *        content:
 *          application/json:
 *            schema:
 *                stack:
 *                  type: string
 *                  description: stack trace for detailed checking
 */
router.post("/logout",logout);

/**
 * @openapi
 * '/users/token':
 *  post:
 *    tags:
 *      - Users
 *    summary: Get a new jwt token for user
 *    description: refresh token sent by user in cookies is matched with the provided one
 *    security:
 *      - apiAuth: []
 *    responses:
 *      200:
 *        description: On success new jwt accesstoken is set into cookies
 *      401:
 *        description: unauthorized
 *      500:
 *        description: Internal server Error, occurs mostly when porperty names are wrong OR Data type of property is wrongly entered
 *        content:
 *          application/json:
 *            schema:
 *                stack:
 *                  type: string
 *                  description: stack trace for detailed checking
 */
router.post("/token",getToken);
router.get("/allusers",getAllUsers);


export default router