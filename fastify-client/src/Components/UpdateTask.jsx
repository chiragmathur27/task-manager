import 'bootstrap/dist/css/bootstrap.min.css'
import  {useState} from 'react'
import axios from 'axios';
import { updateTask } from '../redux/taskSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate , useParams} from 'react-router-dom';

const UpdateTask = () => {
    const {id} = useParams();
    const tasks = useSelector(state => state.tasks.tasks)
    const task = tasks.find(task => task.id===id)
    // console.log(task) 

    const [name, setName] = useState(task.name);
    const [description,setDescription] = useState(task.description)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3000/tasks/'+id, {
            name,description 
        })
        .then((res) => {
            dispatch(updateTask({id,name,description}))
            navigate('/')
            console.log(res)})
        .catch(err => console.log(err))
    }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}>
            <h2>Edit Task</h2>
            <div className='mb-2'>
                <label htmlFor="">Name</label>
                <input type="text"
                 placeholder='Enter task name'
                 className='form-control'
                 value={name}
                 onChange={(e) => setName(e.target.value)}
                 />
            </div>

            <div className='mb-2'>
                <label htmlFor="">Description</label>
                <input type="text"
                 placeholder='Enter task description'
                 className='form-control'
                 value={description}
                onChange={(e) => setDescription(e.target.value)}
                 />
            </div>
            <button className='btn btn-success'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default UpdateTask