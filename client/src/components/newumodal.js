import React, { Component } from 'react';
import { Loginform } from './forms';
import "../style/style.css";
import { Close, CreateUser } from "./buttons";
import Toggle from './leveltoggle';
import API from '../utils/API';

class Tech extends Component {
    state = {
        username: "",
        password: "",
        techname: "",
        level: ''
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        console.log(this.state.techname);
        event.preventDefault();
        const userData = {
            username: this.state.username,
            password: this.state.password,
            techname: this.state.techname,
            level: this.state.level
        }
        if (this.state.username && this.state.password && this.state.techname) {

            API.createUser(userData)
                .then(res => {
                    this.clear();
                    this.props.closeModal()
                    console.log(res)
                })
                        .catch(err => console.log(err))
                    console.log("check the database")
                }
                
    }
        setLevel = (emlevel) => {
            if (this.level === "Manager") {
                this.setState({
                    level: emlevel
                })
            } else {
                this.setState({
                    level: emlevel
                })
            }
        }
        clear=()=>{
            this.setState({
                username: "",
                password: "",
                techname: "",
                level: ''
            })
        }

        render() {
            return (
                <div>
                    <div className="card mb-3 text-center center w-30 postion">
                        <div className="card-header bg-secondary text-white text h4">Welcome to Shoptrac 1.0 Please Login!</div>
                        <form>
                            <div className="card-body">
                                <Loginform
                                    label="Your name:"
                                    value={this.state.techname}
                                    onChange={this.handleInputChange}
                                    placeholder="Please Enter Your Full Name"
                                    name="techname"
                                />
                                <Loginform
                                    label="Create Username:"
                                    value={this.state.username}
                                    onChange={this.handleInputChange}
                                    placeholder="Create New Username"
                                    name="username"
                                />
                                <Loginform
                                    label="Create Password:"
                                    value={this.state.password}
                                    onChange={this.handleInputChange}
                                    placeholder="Create New Password"
                                    name="password"
                                    type="password"
                                />
                                <Toggle level={this.setLevel} />
                                <CreateUser newuse={this.handleFormSubmit} />
                                <Close click={this.props.closeModal} />

                            </div>
                        </form>
                    </div>
                </div >
            )
        }
    }

    export default Tech;