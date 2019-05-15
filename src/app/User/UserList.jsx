import React from 'react'
import { Button, Table, Card, CardTitle, Row, Col } from 'reactstrap';

import Pagination from '../../components/Pagination/Pagination'
import './user.scss'


class UserList extends React.Component {

    render() {
        const { users } = this.props.dataState

        return(
            <div>
                <Card>
                    <Row>
                        <Col>
                            <div className='user-list-title'>
                                <CardTitle className='mb-0'><h3><b>List of users</b></h3></CardTitle>
                                <div className='small text-muted'>This is list of all users data</div>

                                <br />
                                <Button color='primary' onClick={this.props.toggleUserForm}>
                                    <i className='cui-circle-check'></i> <b>Add User</b>
                                </Button>
                            </div>
                        </Col>

                        <Col xs='4'>
                            <div className='search-user' align='right'>
                                <input type='text' className='form-control' placeholder='Search user' />
                            </div>
                        </Col>
                    </Row>

                    <Table hover>
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
                                                <Button color='success' size='sm'>
                                                    <i className='cui-magnifying-glass'></i>
                                                </Button>
                                                <span></span>
                                                <Button color='warning' size='sm' onClick={this.props.selectUser.bind(this, user)}>
                                                    <i className="cui-note" />
                                                </Button>
                                                <span></span>
                                                <Button className="btn btn-danger btn-sm" 
                                                    onClick={this.props.onDeleteUser.bind(this, user.id)}>
                                                    <i className="cui-trash" />
                                                </Button>
                                            </td>
                                        </tr>
                                    )
                                }
                                )
                            }
                        </tbody>
                    </Table>

                    <br />
                    <br />
                    <Pagination />
                </Card>
            </div>
        )
    }
}

export default UserList