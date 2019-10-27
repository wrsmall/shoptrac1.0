import React, { Component } from 'react';
import {Loginform} from './forms'
import "../style/style.css";
import { CreateTask } from "./buttons";
import API from '../utils/API';
import Shop from "../components/logo";

class Add extends Component {

    state = {
        vehicle: "",
        service: "",
        time: "",
        currenttime:"",
        switch: false
    };

 
    componentoMount(){
        this.setState({
            switch: this.props.show
        })
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        console.log(this.props);
        console.log(this.state);
        this.setState({
            [name]: value,
        });
    };


    handleFormSubmit = event => {
        {
        console.log(this.props.tech);
        event.preventDefault();
        console.log(this.props.shopId);
        const taskData = {
            username: this.props.tech,
            vehicle: this.state.vehicle,
            service: this.state.service,
            time: this.state.time,
            ShopId: this.props.shopId,
            timecreated: this.state.currenttime
        }
        console.log(taskData);
        API.createTask(taskData)
            .then(res => {
                console.log(res.data)
                this.close();
                this.reset();
                this.setState({
                    show: false 
                  
                })
                
            })
            .catch(err => console.log(err),
            )}
            
        console.log("check the database")

            
        }
  close=()=>{
    this.props.close();
  }
  reset=()=>{
      this.setState({
        vehicle: "",
        service: "",
        time: "",
        currenttime:""

      })
  }

    render() {
        if (this.props.show === true&& this.props.onduty===true) {
            return (

                <div className="card mb-3 text-center center postion">
                    <div className="card-header bg-secondary">Add task for:<br /><h2>{this.props.tech}</h2></div>
                    <form>
                        <div className="card-body">
                            <Loginform
                                label="Vehicle Model:"
                                name="vehicle"
                                value={this.state.vehicle}
                                onChange={this.handleInputChange}
                                placeholder="Vehicle Model"

                            />
                            <Loginform
                                label="Service Required:"
                                name="service"
                                value={this.state.service}
                                onChange={this.handleInputChange}
                                placeholder="Service Required?"

                            />
                            <Loginform
                                label="Time Alotted:"
                                name="time"
                                value={this.state.time}
                                onChange={this.handleInputChange}
                                placeholder="Time Aloted"

                            />
                            <Loginform
                                label="Current Time:"
                                name="currenttime"
                                value={this.state.currenttime}
                                onChange={this.handleInputChange}
                                placeholder="Current Time"

                            />
                            <CreateTask newuse={this.handleFormSubmit} />


                        </div>
                    </form>
                </div>

            )
        } else {
            return (<Shop />)
        }
    }
}

export default Add;