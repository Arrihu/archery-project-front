import React from 'react'
import { Row, Col, CardTitle, Button } from 'reactstrap'

import './user_list_header.scss'


const UserListHeader = () => {
    return (
        <div>
            <Row>
                <Col>
                    <div className='title-list-user'>
                        <CardTitle className='mb-0'><h3><b>List of users</b></h3></CardTitle>
                        <div className='small text-muted'>This is list of all users data</div>

                        <br />
                        <Button color='primary'>
                            <i className='cui-circle-check'></i> <b>Add User</b>
                        </Button>
                    </div>
                </Col>

                <Col xs='4'>
                    <div className='btn-add-user' align='right'>
                        <input type='text' className='form-control' placeholder='Search user' />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default UserListHeader