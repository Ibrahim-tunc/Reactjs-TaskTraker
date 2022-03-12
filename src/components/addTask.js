import { useState } from "react"


const AddTask = ({addTasksing, show}) => {
    const [name, setName] = useState('')
    const [task, setTask] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    
    const onSubmit = (e) => {
        e.preventDefault()

        if(!name || !task || !day) {
            alert('missed input name , task or day')
        }

        addTasksing({name, task, day, reminder})


        setName('')
        setTask('')
        setDay('')
        setReminder(false)
    }    
    
    return(

        <form className={`add-form ${show}`} onSubmit={onSubmit}>

             <div className="form-control">
                <label>Name & Surname</label>
                <input type='text' placeholder='Add Name & Surname'
                value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="form-control">
                <label>Task</label>
                <input type='text' placeholder='Add Task' 
                value={task} onChange={(e) => setTask(e.target.value)} />
            </div>

            <div className="form-control">
                <label>Day & time</label>
                <input type='text' placeholder='Add Day & Time'
                value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>

            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type='checkbox' checked={reminder}
                value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <input className="btn btn-block" type='submit' value='Save Task' />

        </form>
    )
}

export default AddTask