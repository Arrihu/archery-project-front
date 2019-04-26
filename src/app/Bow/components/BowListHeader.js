import React from 'react'
import { Row, Col, CardTitle, Button } from 'reactstrap'

import './bow_list_header.scss'


const BowListHeader = () => {
    return (
        <div>
            <Row>
                <Col>
                    <div className='title-list-bow'>
                        <CardTitle className='mb-0'><h3><b>List of bows</b></h3></CardTitle>
                        <div className='small text-muted'>This is list of all bows data</div>

                        <br />
                        <Button color='primary'>
                            <i className='cui-circle-check'></i> <b>Add Bow</b>
                        </Button>
                    </div>
                </Col>

                <Col xs='4'>
                    <div className='btn-add-bow' align='right'>
                        <input type='text' className='form-control' placeholder='Search bow' />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default BowListHeader