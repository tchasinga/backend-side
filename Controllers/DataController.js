const mongoose = require('mongoose');
const dataBring = require('../Models/dataSaver')
const express = require('express');


// Get all  Element 
const  getCreatedElement = async (req, res) =>{
    const databring = await dataBring.find({}).sort({createdAt : -1})
    res.status(200).json(databring)
}

// Get One signle Element 

const getOneElement = async (req, res) =>{
    const { id } = req.params
    
     if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : 'No result funded'})
     }
     
    const databring = await dataBring.findById(id) 

    if(!databring){
        return res.status(404).json({error: "no source information was funded"})
    }
    res.status(200).json(databring)
}

// Create a new Elemnt 

const  createElement =  async (req, res) =>{
    const {title, load, reps} = req.body
     
    // here I'll describer the empty Field which will push up a message...
      let emptyField= []


    if(!title){
        emptyField.push('title')
    }
    if(!load){
        emptyField.push('load')
    }
    if(!reps){
        emptyField.push('reps')
    }
    if(emptyField.length > 0 ){
        return res.status(400).json({error : 'Please Up one missing field inside your code please...', emptyField})
    }
   
    try {
          const databring  =  await dataBring.create({title, load, reps})
            res.status(200).json(databring)
    } catch (error) {   
        res.status(400).json({error: error.message})
    }
    
}

// Delete a one or more element 
 
const deleteElement = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : 'No More Information funded'})
    }

    const databring =  await dataBring.findByIdAndDelete({_id: id}) 
    
    if(!databring){
        return res.status(400).json({error: 'you can deal with anythis and d elete'})
    }
    res.status(200).json(databring);
}

// Update an Element or Component 
 
   const UpdatingElement = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : "No  Ground is Live again"})
    }
       const databring = await dataBring.findByIdAndUpdate({_id: id},{
         ...req.body
       })

       if(!databring){
        return res.status(400).json({error: 'check Up your data again'})
       }
       res.status(200).json(databring);
   }


// end of story right here
module.exports = {
    createElement,
    getCreatedElement,
    getOneElement,
    deleteElement,
    UpdatingElement
}