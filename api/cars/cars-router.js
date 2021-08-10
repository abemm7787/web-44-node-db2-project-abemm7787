// DO YOUR MAGIC
const router = require("express").Router()
const Cars = require("./cars-model")
const {} =require("./cars-middleware")

router.get("/", (req,res,next) =>{
    // Cars.get()
    // .then((mx) =>{
    //     res.json(mx)
    // })
    // .catch(next)

console.log("Vibrant Red")


})
router.get("/:id", (req,res,next) =>{
    // Cars.get()
    // .then((mx) =>{
    //     res.json(mx)
    // })
    // .catch(next)




console.log("Vibrant Red")

})
router.post("/", (req,res,next) =>{
    // Cars.get()
    // .then((mx) =>{
    //     res.json(mx)
    // })
    // .catch(next)

console.log("Vibrant Red")

})
router.put("/", (req,res,next) =>{
    // Cars.get()
    // .then((mx) =>{
    //     res.json(mx)
    // })
    // .catch(next)

console.log("Vibrant Red")

})


router.delete("/", (req,res,next) =>{
    // Cars.get()
    // .then((mx) =>{
    //     res.json(mx)
    // })
    // .catch(next)

console.log("Vibrant Red")

})


module.exports = router