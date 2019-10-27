import React, { Component } from 'react';
import "../style/style.css";
import ManagerInfo from '../components/managerinfo';
import Div from "../components/DIv";
import API from "../utils/API";


class techModal extends Component {
    fire = (task) => {
        this.deleteTask(task);
    }
    deleteTask = function (task) {
        console.log(task)
        const did = {
            id: task.id,
        }
        console.log(did)
        API.deleteTask(did)
            .then(res => {
                console.log(res);
                

            })
            .catch(err => console.log(err))

        }
        render() {
            return (
                <div id="saveModal" className="modal w-50 center modal-height modal-position" style={{ display: `${this.props.modal}` }}>
                    <div className="modal-content">
                        <div>
                            <div className="modal-header">
                                <h2>Task For: {this.props.name}</h2>
                                <span className="close" onClick={this.props.close}>&times;</span>

                            </div>
                            <div className="modal-dialog modal-dialog-scrollable" role="document">
                                <div className="modal-body">
                                    {this.props.info.map(task =>
                                        (<Div key={task.id}>
                                            <ManagerInfo
                                                vehicle={task.vehicle}
                                                service={task.service}
                                                hours={task.time}
                                                status={task.status}
                                                created={task.timecreated}>
                                            </ManagerInfo>
                                            <hr />
                                        </Div>

                                        ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            );
        }
    }


    export default techModal;