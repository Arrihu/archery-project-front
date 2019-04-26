import React from 'react'
import { Button, Card, Row, Col } from 'reactstrap'

import UserSelect from '../../components/User/UserSelect'
import './scss/role.scss'


class RoleForm extends React.Component {

    render() {
        const { name, description, userId, mode } = this.props.dataState

        return(
            <div>
                <Card className='role-form-card'>
                    <h5><strong>Add Role Data</strong></h5>
                    <form onSubmit={mode === "update" ? this.props.onUpdateRole : this.props.onCreateRole}>
                        <Row>
                            <Col>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input name="name" type="text" className="form-control" 
                                        placeholder="Role name" value={name} 
                                        onChange={this.props.handleChange}>
                                    </input>
                                </div>
                            </Col>

                            <Col>
                                <div className='form-group'>
                                    <label htmlFor="roleDescription">Description</label>
                                    <textarea name="description" value={description} onChange={this.props.handleChange} cols="30" rows="3" className='form-control' placeholder='Description'></textarea>
                                </div>
                            </Col>

                            <Col>
                                <div className="form-group">
                                    <label>Select User</label>
                                    <UserSelect name="userId"
                                        handleChange={this.props.handleChange}>
                                    </UserSelect>
                                </div>
                            </Col>
                        </Row>
                    </form>

                    <Button className='btn-save-role' color="primary" onClick={mode === "update" ? this.props.onUpdateRole 
                    : this.props.onCreateRole}><b>Save</b></Button>

                    <span className='btn-space-role'></span>

                    <Button color="secondary" onClick={this.props.onCancel}><b>Cancel</b></Button>
                </Card>
            </div>
        )
    }
}

export default RoleForm