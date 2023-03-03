import axios from "axios";

const baseUrl = "http://localhost:5100"

const getAllTodo = (setTodo) => {
   axios.get(baseUrl).then(({data}) => setTodo(data))
}

const addTodo = (text, setText, setTodo) => {
   axios.post(`${baseUrl}/save`, {text}).then((data) => {
      setText("") 
      getAllTodo(setTodo)
   })
}

const updateTodo = (todoId, text, setTodo, setText, setIsUpdating) => {
   axios.post(`${baseUrl}/update`, {_id: todoId, text}).then((data) => {
      setText("") 
      setIsUpdating(false)
      getAllTodo(setTodo)
   })
}

const deleteTodo = (_id, setTodo) => {
   axios.post(`${baseUrl}/delete`, {_id }).then((data) => {
     
      getAllTodo(setTodo)
   })
}

export {getAllTodo, addTodo, updateTodo, deleteTodo}