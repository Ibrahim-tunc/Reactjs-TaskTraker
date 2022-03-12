import React from 'react';
import './App.css';
import Button from './components/button'
import Tasks from './components/tasks';
import AddTask from './components/addTask';


class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
  }
  
  componentDidMount() {
    this.timerId = setInterval( () => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  tick() {
    this.setState({ 
        date:new Date()
    })
  }


  render() {
    return (
      <div className='clock'>
        <h1>it is {this.state.date.toLocaleTimeString()}</h1>
      </div>
    )
  }
}


function App() {
  return (
    <div className='container'>
    <Tasks />
    </div>
  );
}




export default App;
