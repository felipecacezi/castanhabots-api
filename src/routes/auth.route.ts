import { Router } from "express"

const authRouter = Router()

authRouter.get("/", (req, res) => {
  res.send("Welcome to the auth router!")
})

export default authRouter