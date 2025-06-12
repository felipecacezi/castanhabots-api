import { Router, Request, Response } from "express"
import { UserController } from "../controllers/User.controller"
import { Create } from "../services/users/create.service"
import { ListAll } from "../services/users/listAll.service"
import { Delete } from "../services/users/delete.service"

const userRouter = Router()
const createService = new Create()
const listService = new ListAll()
const deleteService = new Delete()

const userController = new UserController(
  createService,
  listService,
  deleteService
)

userRouter.post('/create', (req: Request, res: Response)=> { userController.create(req, res) })
userRouter.get("/list", (req, res)=> { userController.list(req, res) })
userRouter.delete("/delete/:id", (req, res)=> { userController.delete(req, res) })

export default userRouter