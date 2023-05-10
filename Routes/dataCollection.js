const express = require('express');
const router  =  express.Router();

//const app = express();

const {
    createElement,
    getCreatedElement,
    getOneElement,
    deleteElement,
    UpdatingElement
} = require('../Controllers/DataController');

// SAVING DATA TRANSITION CODE AND LEARN MORE  ABOUT LOGIC...


//app.use(dataBring)
// GET ALL DATA-COLLECTION
router.get("/Element",  getCreatedElement)

  // post dataElement in Collection
router.post('/Element' , createElement)
    

// put dataElement in database  

router.put("/Element/:id", getOneElement );

// delete selecting data in the server

  router.delete("/Element/:id",  deleteElement )


// update element in the dataCollection
 
router.patch("/Element/:id", UpdatingElement)


module.exports= router;