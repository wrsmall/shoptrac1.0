import React, { Component } from 'react';
import { Loginform } from './forms';
import "../style/style.css";
import { Login, Newuse } from './buttons';
import API from '../utils/API';
import { withRouter } from "react-router-dom";

class Logincard extends Component {
    state = {
        username: "",
        techname:"",
        password: "",
        level: "Manager"
    };
    Fire = (res) => {
            this.setState({techname: res.techname})
            this.loggedInn(res);
            this.checkLevel(res);
        
    }
    loggedInn = (res) => {
        const upuse = {
            username: res.data.username,
            onduty: true,

        }
        API.onDuty(upuse)
            .then(res =>
                console.log(res))
            .catch(err => console.log(err))
    }

    checkLevel = (res) => {
        console.log(res);
        const level = {
            level: res.data.level,
            name: res.data.techname,
            shopId:res.data.id
        }
        console.log(level.level);
        if (level.level === this.state.level) {
            this.props.history.push({
                pathname: '/manager',
                state:{
                    techname:level.name,
                    shopId:level.shopId
                } 
            })


        } else (this.props.history.push({
            pathname: '/tech',
            state:{
                techname:level.name,
                shopId:level.shopId
            }  
        })
        )        
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        console.log(this.state.username);
        event.preventDefault();
        const query = {
            username: this.state.username,
            password:this.state.password

        }
        if (this.state.username && this.state.password) {
            console.log(query);
            API.findUser(query)
                .then(res => {
                    console.log(res)
                    this.Fire(res);
                })
                .catch(err => console.log(err))
            console.log("check the database")
        }

    };
    render() {

        return (
            <div>
                <div className="card mb-3 text-center center w-30 postion">
                    <div className="card-header bg-secondary text-white text h4">Welcome to Shoptrac 1.0 Please Login!</div>
                    <div className="card-body">
                        <Loginform
                            label="Username:"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleInputChange}
                            placeholder="Your Username"
                            type="text" />
                        <Loginform
                            label="Password:"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            placeholder="Your Password" 
                            type="password"/>
                        <Login login={this.handleFormSubmit} />
                        <Newuse click={this.props.showModal} />

                    </div>
                </div>

            </div>
        );
    }

};


export default withRouter(Logincard);