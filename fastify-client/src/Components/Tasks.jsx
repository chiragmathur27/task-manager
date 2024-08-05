import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch,useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteTask } from '../redux/taskSlice'

const Tasks = () => {

  const tasks = useSelector(state => state.tasks.tasks)
  const dispatch = useDispatch()


  const handleDelete = (id) => {
    axios.delete('http://localhost:3000/tasks/'+id)
    .then(res => {
      console.log(res)
      dispatch(deleteTask({id}))
    })
    .catch((err) => console.log(err))
  }
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
        
            <Link to='/create' className='btn btn-success btn-sm'>
            Add +
            </Link>
            <table className='table'>
                <thead>

                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                  tasks.map(task => {
                    return (<tr key={task.id}>
                      <td>{task.name}</td>
                      <td>{task.description}</td>
                      <td>
                        <Link to={`/edit/${task.id}`} className='btn btn-sm btn-success me-2'>Edit</Link> 
                        <button onClick={()=>handleDelete(task.id)} className='btn btn-sm btn-danger'>Delete</button>
                      </td>
                    </tr>)
                  })
                }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Tasks