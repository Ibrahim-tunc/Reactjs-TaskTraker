import { useState, useEffect} from 'react'
import Task from './task'
import AddTask from './addTask'
import Button from './button'

const Tasks = () => {

    // Task Processes Add & delete

    const [datalist, setDatalist] = useState([])

    useEffect( () => {
        const getTask = async () => {
            const tasksFromServer = await fetchTasks()
            setDatalist(tasksFromServer)
        }

        getTask()
    }, [])

    const fetchTasks = async () => {
        const res = await fetch('http://localhost:3000/data')
        const data = await res.json()

        return data 
    }

    

    const deleteTask = async (id) => {
        await fetch (`http://localhost:3000/data/${id}`,
        {method: 'DELETE'}
    )
     setDatalist(datalist.filter((data) => data.id !==id))   
}


    const addTask= async (data) => {
    const res = await fetch('http://localhost:3000/data', {
        method:'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(data)
    })
        const newTask = await res.json()
        setDatalist([...datalist, newTask])
    }    


    // Toggle Reminder

    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:3000/data/${id}`)
        const data = await res.json()

        return data 
    }

    const toggleReminder = async (id) => {
        const taskToToggle = await fetchTask(id)
        const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}

        const res = await fetch(`http://localhost:3000/data/${id}` , {
            method: 'PUT',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(updTask)
        })

        const newData = await res.json()

        setDatalist(
            datalist.map((data) => 
                data.id === id ? {...data, reminder: newData.reminder} : data
            )
        )
    }

    // Toggle Class

    const [show, setShow] = useState(false)

    const toggleClass = () => {
        
        show ? setShow(false) : setShow(true)
    }

    return (
        <>
        <div className='header'>
        <h1>Task Traker</h1>
        {show ? <Button text={'Close'} click={toggleClass} color={'red'}/> :
        <Button text={'Add'} click={toggleClass} color={'green'}/> }
        </div>
        {show ? <AddTask addTasksing={addTask} show={show}/> : ''}        
        { datalist.length > 0 ? 
        datalist.map((data) => (
            <Task data={data} id={data.id} onDelete={deleteTask} onToggle= {toggleReminder}/> 
         )) :
         'No Content'
        }
         </>
    )
}

export default Tasks

