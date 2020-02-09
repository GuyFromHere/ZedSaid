const express = require("express");
const router = express.Router();
const zed = require('../models/zed');

// call selectAll function via zed model
router.get("/edit", (req, res) => {
    zed.edit((data) => {
        const newObj = {
            zed: data,
            editMode: true
        }
        res.render("index", newObj);
    });
});

router.get("/", (req, res) => {
    zed.rand((data) => {
        // get a random quote
        const newObj = {
            zed: data
        }
        res.render("index", newObj);
    });
});

// call addNew function via model
router.post("/api/add_quote", (req, res) => {
    zed.add([req.body.age, req.body.quote, req.body.context], result => {
        const newObj = {
            age: req.body.age,
            quote: req.body.quote,
            context: req.body.context
        };
        res.json({ id: result.insertId });
    });
});

// call updateOne function via burger model 
router.put("/api/burgers/:id", (req, res) => {
    // function takes two arguments: devourstate as JSON and the id as a url param
    /*  burger.update(req.body.devoured, req.params.id, result => {
         // call function and set http status of result
         if (result.changedRows === 0) {
             return res.status(404).end();
         }
         res.status(200).end();
     }) */
})

module.exports = router;