import React from 'react';
import { Button, Card, Row, Col } from 'reactstrap';

import './style/user.scss'


class UserForm extends React.Component {

    render() {
        const { name, email, username, password, mode } = this.props.dataState

        return(
            <div>
                <Card className='user-form-card'>
                    <h5><strong>Add User Data</strong></h5>
                    <form onSubmit={mode === "update" ? this.props.onUpdateUser : this.props.onCreateUser}>
                        <Row>
                            <Col>
                                <div className="form-group">
                                    <label>Nama</label>
                                    <input name="name" type="text" className="form-control" 
                                    value={name} onChange={this.props.handleChange} placeholder='Input name'></input>
                                </div>
                            </Col>

                            <Col>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input name="email" type="email" className="form-control"
                                    value={email} onChange={this.props.handleChange} placeholder='Email address'></input>
                                </div>
                            </Col>

                            <Col>
                                <div className="form-group">
                                    <label>Username</label>
                                    <input name="username" type="test" className="form-control"
                                    value={username} onChange={this.props.handleChange} placeholder='Username'></input>
                                </div>
                            </Col>

                            <Col>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input name="password" type="password" className="form-control"
                                    value={password} onChange={this.props.handleChange} placeholder='Password'></input>
                                </div>
                            </Col>
                        </Row>
                    </form>

                    <Button className='btn-save-user' type="submit" color="primary"
                    onClick={mode === "update" ? this.props.onUpdateUser : this.props.onCreateUser}
                    >Save</Button>
                    <span className='user-btn-space'></span>
                    <Button color="secondary">Cancel</Button>
                </Card>
            </div>
        )
    }
}

export default UserForm