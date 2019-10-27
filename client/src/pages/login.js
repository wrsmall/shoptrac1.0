import React, { Component } from 'react';
import "../style/style.css";
import Modal from "../components/newumodal";
import Logincard from '../components/logincard';
import { appendFile } from 'fs';



class Tech extends Component {
    state = {
        show: false
    };

    showModal =()=> {
        this.setState({
            show: true
        })
    }
    closeModal =()=> {
        this.setState({
            show: false
        })
    }

    render() {
        if (this.state.show===false) {
            return (
                <Logincard showModal={this.showModal} />)
            }else{
            return(
        <Modal closeModal={this.closeModal} />
            )
        }
    
    }
}
export default Tech;
