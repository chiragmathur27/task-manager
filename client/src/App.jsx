import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './Components/Tasks'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateTask from './Components/CreateTask'
import axios from 'axios'
import { useDispatch} from 'react-redux'
import { getTask } from './redux/taskSlice'
import UpdateTask from './Components/UpdateTask'

function App() {

 const dispatch = useDispatch()
  useEffect(()=>{
    const fetchData = async () =>{
      try{
        const response = await axios.get('http://localhost:3000/tasks');
        // console.log(response)
        dispatch(getTask(response.data))
      } catch(err){
        console.log(err)
      }
   
    } 
    fetchData();
  },[])

  return (
    <>

       {/* <Users/> */}
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Users/>}/>
        <Route path='/create' element={<CreateTask/>}/>
        <Route path='/edit/:id' element={<UpdateTask/>}/>
        
       </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
