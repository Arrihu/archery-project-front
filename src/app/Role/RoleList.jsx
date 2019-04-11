import React from 'react'
import { Table, Button, Card, Row, Col } from 'reactstrap'

import './style/role.scss'


class RoleList extends React.Component {

    render() {
        const { roles } = this.props.dataState

        return(
            <div>
                <Card>
                    <Row>
                        <Col>
                            <div className='list-role-title'>
                                <h4><b>List Role Data</b></h4>
                            </div>
                        </Col>

                        <Col>
                            <div className='btn-add-role' align='right'>
                                <Button color='primary' onClick={this.props.toggleRoleForm}>
                                    <i className='cui-cursor'></i> <b>Add Role</b>
                                </Button>
                            </div>
                        </Col>
                    </Row>
                    <Table>
                        <thead>
                            <tr>
                                <th style={{width: 20}}>#</th>
                                <th style={{width: 100}}>Name</th>
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
                                            <td>{role.userId}</td>
                                            <td>
                                                <Button color="warning" size="sm" onClick={this.props.selectRole.bind(this, role)}>
                                                    <i className="cui-note" />
                                                </Button>

                                                <span style={{paddingLeft: 5}}></span>

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
                </Card>
            </div>
        )
    }
}

export default RoleList