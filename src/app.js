const express = require('express')
const {
  getTask,
  getAllTasks,
  createTask,
  updateTask,
  deleteTask
} = require('./controller')

const app = express()
app.locals.dataFilePath = "./data.json"

const port = 3000

app.use(express.json())
app.get('/', (req, res) => res.send('<h1>Hi, Welcome!</h1>'))

app.get("/tasks/:id", getTask)
app.get("/tasks", getAllTasks)

app.post("/tasks", createTask)

app.put("/tasks", updateTask)

app.delete("/tasks/:id", deleteTask)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

exports.app = app
