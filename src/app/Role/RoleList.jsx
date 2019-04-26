import React from 'react'
import { Table, Button, Card } from 'reactstrap'

import RoleListHeader from './components/RoleListHeader'
import Pagination from '../../components/Pagination/Pagination'
import './scss/role.scss'

class RoleList extends React.Component {

    render() {
        const { roles } = this.props.dataState

        return(
            <div>
                <Card>
                    <RoleListHeader />

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