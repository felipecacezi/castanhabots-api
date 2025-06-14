import { Router, Request, Response } from "express"
import { UserController } from "../controllers/User.controller"
import { Create } from "../services/users/create.service"
import { ListAll } from "../services/users/listAll.service"
import { Delete } from "../services/users/delete.service"
import { Update } from "../services/users/update.service"

const userRouter = Router()
const createService = new Create()
const listService = new ListAll()
const deleteService = new Delete()
const updateService = new Update()

const userController = new UserController(
  createService,
  listService,
  deleteService,
  updateService
)

userRouter.post('/create', (req: Request, res: Response)=> { userController.create(req, res) })
userRouter.get("/list", (req, res)=> { userController.list(req, res) })
userRouter.delete("/delete/:id", (req, res)=> { userController.delete(req, res) })
userRouter.patch("/update/:id", (req, res)=> { userController.update(req, res) })

export default userRouter