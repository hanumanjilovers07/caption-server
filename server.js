const express = require("express")
const multer = require("multer")
const cors = require("cors")

const app = express()

app.use(cors())

const upload = multer({ dest: "uploads/" })

app.post("/upload", upload.single("video"), (req, res) => {

    console.log("Video received:", req.file.filename)

    res.json({
        message: "Video uploaded successfully",
        file: req.file.filename
    })

})

app.get("/", (req,res)=>{

    res.send("Caption AI server running")

})

app.listen(3000, () => {

    console.log("Server running on port 3000")

})
