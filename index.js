import express from "express"
import cookieParser from "cookie-parser"

const app = express()
const PORT = 3000

app.unsubscribe(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use(express.static("public"))
app.set("view engine","ejs")

app.get("/",(req,res)=>{
    res.send("hey")
})

app.listen(PORT,()=>{
    console.log(`app is rinning on port : ${PORT}`)
})


