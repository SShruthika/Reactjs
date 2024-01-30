import { TextField } from '@mui/material';
import React from 'react'

class State extends React.Component{
    constructor(){
        super();
        this.state={initialvalue:"welcome" ,name:"shru"}  
    }
    changevalue = () =>
    {
        this.setState({initialvalue:"thanks for giving your time"});
    }
    render(){     
        return <div>
        <h1>{this.state.initialvalue}  {this.state.name}</h1>
        <br/>
        <button type="button" onMouseOver={this.changevalue.bind(this)}>Exit</button>
        <TextField label="password" type='password' variant='outlined'/>
        </div>
    }
}
export default State;
