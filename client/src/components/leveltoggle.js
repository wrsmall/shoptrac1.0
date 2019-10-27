import React,{Component} from 'react';

class Toggle extends Component { 
    setGender(event) {
        const emlevel=event.target.value
        console.log(emlevel);
        this.props.level(emlevel);
      }
    render(){
    return (
        <div>
        <div onChange={this.setGender.bind(this)}>
        <input className="m-2" type="radio" value="Tech" name="level"/> Tech
        <input className="m-2" type="radio" value="Manager" name="level"/> Manager
      </div>
        </div>
    )
    }
}
export default Toggle