const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customerController");
/**
 * @swagger
 * /api/customers:
 *   post:
 *     summary: Create a new customer
 *     description: Endpoint to create a new customer record.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               place:
 *                 type: string
 *     responses:
 *       '201':
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 place:
 *                   type: string
 *                 sessionId:
 *                   type: string
 */

// POST request to set customer data into database with api key
router.post("/createcustomers", customerController.createCustomer);

/**
 * @swagger
 * /api/customers:
 *   get:
 *     summary: Get all customers
 *     description: Retrieve a list of all customers.
 *     tags: [Customers]
 *     responses:
 *       '200':
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   place:
 *                     type: string
 *                   sessionId:
 *                     type: string
 */

//GET request to get the customer data from database with api key
router.get("/getcustomers", customerController.getCustomer);

module.exports = router;
