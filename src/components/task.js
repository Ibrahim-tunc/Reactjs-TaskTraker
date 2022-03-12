import { FaTimes } from 'react-icons/fa'


const Task = ({data, onDelete ,onToggle}) => {
  return (
      <div key={data.id} className={`task ${data.reminder && 'reminder'}`}
      onDoubleClick= {() => onToggle(data.id)}>

      <h3>{data.name}  <FaTimes style={{color: 'black', cursor: 'pointer'}}
       onClick={() => onDelete(data.id)}/>
       </h3>

      <p>{data.task} </p>
      <p>{data.day}</p>
      </div>

    ) 
}

export default Task