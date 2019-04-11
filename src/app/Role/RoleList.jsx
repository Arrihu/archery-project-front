import React from 'react'
import { Table, Button } from 'reactstrap'


class RoleList extends React.Component {

    render() {
        const { roles } = this.props.dataState

        return(
            <div>
                <div className="card">
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
                                                <Button color="warning" size="sm" 
                                                    onClick={this.props.selectRole.bind(this, role)}>
                                                    <i className="cui-note" />
                                                </Button>

                                                <span style={{paddingLeft: 5}}></span>

                                                <Button color="danger" size="sm" 
                                                    onClick={this.props.onDeleteRole.bind(this, role.id)}>
                                                    <i className="cui-trash" />
                                                </Button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

export default RoleList