import { Router } from "express"

const mainRouter = Router()

mainRouter.get("/", (req, res) => {
  res.send("Welcome to the main route!")
})

export default mainRouter