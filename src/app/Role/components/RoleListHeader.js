import React from 'react'
import { Row, Col, CardTitle, Button } from 'reactstrap'

import './role_list_header.scss'


const RoleListHeader = () => {
    return (
        <div>
            <Row>
                <Col>
                    <div className='title-list-role'>
                        <CardTitle className='mb-0'><h3><b>List of roles</b></h3></CardTitle>
                        <div className='small text-muted'>This is list of all roles data</div>

                        <br />
                        <Button color='primary'>
                            <i className='cui-circle-check'></i> <b>Add Role</b>
                        </Button>
                    </div>
                </Col>

                <Col xs='4'>
                    <div className='btn-add-role' align='right'>
                        <input type='text' className='form-control' placeholder='Search role' />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default RoleListHeader