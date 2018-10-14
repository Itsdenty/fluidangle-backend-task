/**
 * @swagger
 * securityDefinitions:
 *   Bearer:
 *     type: apiKey
 *     name: Authorization
 *     in: header
 * definition:
 *   Contact:
 *     properties:
 *       firstName:
 *         type: string
 *       lastName:
 *         type: string
 *       email:
 *         type: string
 *         format: email
 *       phoneNumber:
 *         type: string
 *   ContactModel:
 *     properties:
 *       contact:
 *         $ref: '#/definitions/Contact'
 *   User:
 *     properties:
 *       firstName:
 *         type: string
 *         minLength: 5
 *         maxLength: 20
 *       lastName:
 *         type: string
 *         minLength: 5
 *         maxLength: 200
 *       email:
 *         type: string
 *         minLength: 5
 *         maxLength: 200
 *   ContactObject:
 *     properties:
 *       firstName:
 *         type: string
 *       lastName:
 *         type: string
 *       email:
 *         type: string
 *         format: email
 *       phoneNumber:
 *         type: number
 *       user:
 *         $ref: '#/definitions/User'
 *       isStarred:
 *         type: boolean
 *   ManipulationObject:
 *     properties:
 *       n:
 *         type: number
 *       nModified:
 *         type: number
 *       ok:
 *         type: number
 *   ResponseObjectSingleContact:
 *     properties:
 *       responseCode:
 *         type: number
 *       responseText:
 *         type: string
 *       payload:
 *         $ref: '#/definitions/ContactObject'
 *   ResponseManipulation:
 *     properties:
 *       responseCode:
 *         type: number
 *       responseText:
 *         type: string
 *       payload:
 *         $ref: '#/definitions/ManipulationObject'
 *   ResponseObjectContact:
 *     properties:
 *       responseCode:
 *         type: number
 *       responseText:
 *         type: string
 *       payload:
 *         type: object
 *         properties:
 *         total:
 *           type: number
 *         contacts:
 *           type: array
 *           contacts:
 *             $ref: '#/definitions/ContactObject'
 *   ErrorObject:
 *     properties:
 *       responseCode:
 *         type: number
 *       responseText:
 *         type: string
 *       payload:
 *         type: string
 *   Token:
 *     properties:
 *       token:
 *         type: string
 */
/**
 * @swagger
 * /contact:
 *   get:
 *     tags:
 *       - Contact
 *     description: Returns all contacts data
 *     security:
 *       - Bearer: []
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Authenticated user data
 *         schema:
 *           $ref: '#/definitions/ResponseObjectContact'
 */

/**
 * @swagger
 * /contact/{id}:
 *   get:
 *     tags:
 *       - SingleContact
 *     description: Returns a single contact object
 *     security:
 *       - Bearer: []
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Contact id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Contact details successfully retrieved
 *         schema:
 *           $ref: '#/definitions/ResponseObjectSingleContact'
 *       400:
 *         description: You supplied and invalid contact id
 */
/**
 * @swagger
 * /contact/{id}:
 *   delete:
 *     tags:
 *       - SingleContact
 *     description: Delete a single contact object
 *     security:
 *       - Bearer: []
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Contact's id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Contact successfully deleted
 *         schema:
 *           $ref: '#/definitions/ResponseManipulation'
 *       400:
 *         description: You supplied and invalid contact id
 */
/**
 * @swagger
 * /contact/{id}:
 *   put:
 *     tags:
 *       - SingleContact
 *     description: update Contact's details
 *     security:
 *       - Bearer: []
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user
 *         description: Updated Contact's details
 *         in: body
 *         required: true
 *         type: object
 *         schema:
 *           $ref: '#/definitions/ContactModel'
 *       - name: id
 *         description: Contact's id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully updated Contact's details
 *         schema:
 *           $ref: '#/definitions/ResponseManipulation'
 */
/**
 * @swagger
 * /contact:
 *   post:
 *     tags:
 *       - Contact
 *     description: Creates user contacts
 *     security:
 *       - Bearer: []
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: contact
 *         description: contact creation credentials
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/ContactModel'
 *     responses:
 *       200:
 *         description: Successfully created
 *       400:
 *         description: You supplied and invalid contact field
 *         schema:
 *           $ref: '#/definitions/ErrorObject'
 */

/**
 * @swagger
 * /contact/get/starred:
 *   get:
 *     tags:
 *       - Contact
 *     description: Returns all starred contacts
 *     security:
 *       - Bearer: []
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: All starred contacts
 *         schema:
 *           $ref: '#/definitions/ResponseObjectContact'
 */
