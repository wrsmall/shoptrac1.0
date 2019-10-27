import React, { Component } from 'react';
import "../style/style.css";
import Jumbotron from "../components/jumbotron";
import API from '../utils/API';
import Add from '../components/AddTaskModal';
import Info from '../components/techInfo';
import { AddTask, Task, Logout } from '../components/buttons'
import TechTask from '../components/techtaskmodal';
import Card from '../components/employcard';


class Manager extends Component {

  state = {
    employee: [],
    show: false,
    tech: {},
    techname: '',
    modal: "none",
    techtask: [],
    user: ''
  }


  componentDidMount() {
    this.employeesOnduty();
  }
  employeesOnduty = function () {
    let that = this;
    API.getEmployees()
      .then(function (res) {
        console.log(res);
        that.setState({ employee: res.data })
      })
      .catch(err => console.log(err));

  };
  addTask = employee => {
    this.employeesOnduty();
    this.setState({
      show: true,
      tech: employee
    })
  }
  changeShow = () => {
    this.employeesOnduty();
    this.setState({
      show: false
    })

  }
  showModal = (ShopId) => {
    this.setState({
      modal: "block",
      user: ShopId.username
    })
    console.log(this.state.user)


  }
  closeModal = () => {
    this.setState({
      modal: "none"
    })

  }
  getTechTask = (employee) => {
    const ShopId = {
      username: employee.techname
    }
    API.getTask(ShopId)
      .then(res => {
        console.log(res)
        this.setState({
          techtask: res.data,
        })
        console.log(this.state.techtask)
        this.showModal(ShopId);
      })
      .catch(err => console.log(err));
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
      .catch(function(err) {
        console.log("hello");
        console.log(err)
      });
  }
  signout = function() {
    console.log("wow");
    this.props.history.push({
      pathname: '/'
    })
  }
  emlog = () => {
    console.log("mmmm");
    API.deleteTask()
      .then( res => {
        console.log(res);
        this.emlogout();
      })
      .catch(function(err) {
        console.log("yo");
        console.log(err)
      });

  };




  render() {
    return (
      <div className="container justify-content-center bgimg">
        <div className="p-3 bg-secondary rounded mt-2 w-95"><h2 className="text">Welcome: {this.props.location.state.techname}</h2><Logout onClick={this.emlog} /></div>
        <div className="row">
          <div className="col-4">
            {this.state.employee.slice(0, 3).map(employee =>
              (<Jumbotron key={employee.id}>
                <Info
                  techname={employee.techname}
                  task={employee.Tasks.length}>
                </Info>
                <AddTask onClick={() => this.addTask(employee)} />
                <Task onClick={() => this.getTechTask(employee)} />
              </Jumbotron>
              ))}


          </div>
          <div className="col-4 d-flex justify-content-center">
            <Add show={this.state.show} fullTech={this.state.tech} tech={this.state.tech.techname} onduty={this.state.tech.onduty} shopId={this.state.tech.id} close={this.changeShow} />
          </div>
          < div className="col-4">

            {this.state.employee.slice(3, 6).map(employee =>
              (<Jumbotron key={employee.id}>
                <Info
                  techname={employee.techname}
                  task={employee.Tasks.length}>
                </Info>
                <AddTask onClick={() => this.addTask(employee)} />
                <Task onClick={() => this.getTechTask(employee)} />
              </Jumbotron>
              ))}

          </ div>
          <TechTask info={this.state.techtask} modal={this.state.modal} close={this.closeModal} name={this.state.user} remove={this.deleteTask} />
        </div>
      </div>
    );
  };
}

export default Manager;
