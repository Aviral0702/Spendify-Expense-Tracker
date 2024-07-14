import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors())

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


//routes import
import userRouter from './routes/user.routes.js'
import transactionRoutes from './routes/transaction.route.js'
//routes declaration
app.use("/api/v1/users", userRouter)
app.use("/api/v1/transactions", transactionRoutes);

export { app }