import React from 'react'
import { Button, Table } from 'reactstrap';


class UserList extends React.Component {

    render() {
        const { users } = this.props.dataState

        return(
            <div>
                <div className="card">
                    <Table>
                        <thead>
                            <tr>
                                <th style={{width: 30}}>#</th>
                                <th style={{width: 150}}>Nama</th>
                                <th style={{width: 100}}>Email</th>
                                <th style={{width: 100}}>Username</th>
                                <th style={{width: 100}}>Password</th>
                                <th style={{width: 140}}>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                typeof(users) == "object" &&
                                users.map((user, i) => {
                                    return(
                                        <tr key={i}>
                                            <td>{i+1}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.username}</td>
                                            <td>{user.password}</td>
                                            <td>
                                                <button className="btn btn-warning btn-sm" 
                                                    onClick={this.props.selectUser.bind(this, user)}>
                                                    <i className="cui-note" />
                                                </button>

                                                <span style={{paddingLeft: 10}}></span>

                                                <button className="btn btn-danger btn-sm" 
                                                    onClick={this.props.onDeleteUser.bind(this, user.id)}>
                                                    <i className="cui-trash" />
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                }
                                )
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

export default UserList