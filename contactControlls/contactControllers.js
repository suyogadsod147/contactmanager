const asyncHandler = require("express-async-handler");
const Contact = require("../models/contact.model.js")


const getContact = asyncHandler(async (req, res) => {
    const contacts = await Contact.find({user_id : req.user.id});
    res.status(200).json(contacts);
})


const createContact = asyncHandler(async (req, res) => {
    console.log(req.body)
    const {name , email , phone} = req.body;
    if(!name || !email || !phone){
        res.status(404)
        throw new Error("All fields are required")
    }
    const contact = await Contact.create({
        user_id: req.user.id,
        name,
        email,
        phone,
    })
    res.status(200).json(contact);
})

const getContactFor = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact not found")
    }
    res.status(200).json(contact);
})


const updateContactFor = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact not found")
    }

    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("user dont have permission to update other users contacts")
    }



    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id, 
        req.body,
        {new : true}
    )

    res.status(200).json(updatedContact);
})

// delete a contact
// route DELETE /api/contacts/:id
// access public
const deleteContactFor = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact not found")
    }
    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("user dont have permission to update other users contacts")
    }


    await Contact.deleteOne({_id : req.params.id})
    res.status(200).json(contact);
})

module.exports = {
    deleteContactFor, getContact ,
     createContact , getContactFor , 
     updateContactFor}