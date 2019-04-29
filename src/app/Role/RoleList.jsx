import React from 'react'
import { Table, Button, Card, CardTitle, Row, Col } from 'reactstrap'

import Pagination from '../../components/Pagination/Pagination'
import './role.scss'

class RoleList extends React.Component {

    render() {
        const { roles } = this.props.dataState

        return(
            <div>
                <Card>
                    <Row>
                        <Col>
                            <div className='list-role-title'>
                                <CardTitle className='mb-0'><h3><b>List of roles</b></h3></CardTitle>
                                <div className='small text-muted'>This is list of all roles data</div>

                                <br />
                                <Button color='primary' onClick={this.props.toggleRoleForm}>
                                    <i className='cui-circle-check'></i> <b>Add Role</b>
                                </Button>
                            </div>
                        </Col>

                        <Col xs='4'>
                            <div className='search-role' align='right'>
                                <input type='text' className='form-control' placeholder='Search role' />
                            </div>
                        </Col>
                    </Row>

                    <Table hover>
                        <thead>
                            <tr>
                                <th style={{width: 20}}>#</th>
                                <th style={{width: 100}}>Name</th>
                                <th style={{width: 100}}>Description</th>
                                <th style={{width: 100}}>User</th>
                                <th style={{width: 50}}>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                typeof(roles) === "object" &&
                                roles.map((role, i) => {
                                    return(
                                        <tr key={i}>
                                            <td>{i+1}</td>
                                            <td>{role.name}</td>
                                            <td>{role.description}</td>
                                            <td>{role.userId}</td>
                                            <td>
                                                <Button color='success' size='sm'>
                                                    <i className='cui-magnifying-glass'></i>
                                                </Button>
                                                <span></span>
                                                <Button color="warning" size="sm" onClick={this.props.selectRole.bind(this, role)}>
                                                    <i className="cui-note" />
                                                </Button>
                                                <span></span>
                                                <Button color="danger" size="sm" onClick={this.props.onDeleteRole.bind(this, role.id)}>
                                                    <i className="cui-trash" />
                                                </Button>
                                            </td>
                                        </tr>
                                    )
                                })
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

export default RoleList