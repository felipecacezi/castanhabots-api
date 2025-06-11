import { Router, Request, Response } from "express"
import { UserController } from "../controllers/User.controller"
import { Create } from "../services/users/create.service"

const userRouter = Router()
const createService = new Create()
const userController = new UserController(createService)

userRouter.post('/create', (req: Request, res: Response)=> { userController.create(req, res) })

userRouter.get("/", (req, res) => {
  res.send("Welcome to the user router!")
})

export default userRouter