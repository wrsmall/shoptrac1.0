import React, { Component } from "react";
import TechJumbo from "../components/techjumbo";
import Techchat from "../components/techchat";
import API from "../utils/API";
import Jumbotron from "../components/jumbotron";
import TaskInfo from '../components/taskinfor';
import { Ahead, Behind, Done, Logout, SeeTask } from '../components/buttons';
import { Userform } from '../components/forms';
import TechImage from '../components/techimage'; 
import StatusChecker from '../components/statuschecker'

class Tech extends Component { 
    state = {
        
        techname: this.props.location.state.techname,
        task: [],
        image: "",
        status: 'On Time'
        
    }
    componentDidMount() {
        console.log(this.state.techname)
        this.findTask();
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state.image)
    };
    findTask = function () {
        this.setState({
            status: "On Time"
        })
        const ShopId = {
            username: this.state.techname
        }
        API.getTask(ShopId)
            .then(res => {
                console.log(res)
                this.setState({ task: res.data })
                console.log(this.state.task)
            })
            .catch(err => console.log(err));

    }
    aheadSced = task => {
        this.setState({
            status: "Ahead"
        })
        
        const ahead = {
            id: task.id,
            status: 'Ahead'
        }
        console.log(ahead)
        API.updateAhead(ahead)
            .then(res => {
                console.log(res)
                
            })
            .catch(err => console.log(err))
    }
    behindSced = task => {
        this.setState({
            status: "Behind"
        })
        const behind = {
            id: task.id,
            status: 'Behind'
        }
        console.log(behind)
        API.updateBehind(behind)
            .then(res => {
                console.log(res)
                
            })
            .catch(err => console.log(err))
    }
    taskComplete = task => {
        const complete = {
            id: task.id,
            status: 'Complete'
        }
        console.log(complete)
        API.complete(complete)
            .then(res => {
                console.log(res)
                this.findTask()
            })
            .catch(err => console.log(err))
    }
    emlogout = () => {
        const em = {
            employee: this.props.location.state.techname,
            onduty: false
        }
        console.log(em)
        API.logOut(em)
            .then(res => {
                console.log(res)
                this.signout();
                
            })
            .catch(err => console.log(err))
    }
    signout = () => {
        this.props.history.push({
            pathname: '/'
        })
        
    }



    render() {
        return (
            <div className="container w-95">
                <div className="p-3 bg-secondary mt-2 rounded w-95"><h2 className="text">Welcome: {this.props.location.state.techname}</h2><Logout onClick={this.emlogout} /></div>
                <div className="row"></div>
                <div className="row">
                    <div className="col-6 ">
                        <TechJumbo>
                            <p className="mt-0 h3">Assigned Task:</p>
                            {this.state.task.map(task =>
                                (<Jumbotron key={task.id}>
                                    <TaskInfo
                                        vehicle={task.vehicle}
                                        service={task.service}
                                        hours={task.time}
                                        status={task.status}
                                    >
                                    </TaskInfo>
                                    
                                    <Ahead onClick={() => this.aheadSced(task)} /><Behind onClick={() => this.behindSced(task)} /><Done onClick={() => this.taskComplete(task)} />
                                </Jumbotron>
                                ))}
                               
                        </TechJumbo>
                        
                    </div>
                    
                    <div className="col-6">
                        <Techchat>
                            <Userform
                                label="Set Image:"
                                name="image"
                                value={this.state.image}
                                onChange={this.handleInputChange}
                                placeholder="Insert Image URL"
                            />
                            <TechImage
                                image={this.state.image}
                            />
                            <StatusChecker 
                            status={this.state.status}
                            />
                        </Techchat>
                    </div>
                </div>
            </div>

        )
    }
}
export default Tech;