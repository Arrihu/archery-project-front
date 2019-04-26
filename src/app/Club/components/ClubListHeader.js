import React from 'react'
import { Row, Col, CardTitle, Button } from 'reactstrap'

import './club_list_header.scss'


const ClubListHeader = () => {
    return (
        <div>
            <Row>
                <Col>
                    <div className='title-list-club'>
                        <CardTitle className='mb-0'><h3><b>List of clubs</b></h3></CardTitle>
                        <div className='small text-muted'>This is list of all clubs data</div>

                        <br />
                        <Button color='primary'>
                            <i className='cui-circle-check'></i> <b>Add Club</b>
                        </Button>
                    </div>
                </Col>

                <Col xs='4'>
                    <div className='btn-add-club' align='right'>
                        <input type='text' className='form-control' placeholder='Search club' />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ClubListHeader