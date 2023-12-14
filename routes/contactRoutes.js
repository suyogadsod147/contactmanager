const express = require('express');
const router = express.Router();
const { getContact ,
    createContact , 
    getContactFor ,
    deleteContactFor, 
    updateContactFor
    } = require("../contactControlls/contactControllers")

const validateToken = require("../Middleware/validateTokenHandler")
router.use(validateToken);

router.route('/').get(getContact).post(createContact)
router.route('/:id').get(getContactFor).put(updateContactFor).delete(deleteContactFor)
module.exports = router;