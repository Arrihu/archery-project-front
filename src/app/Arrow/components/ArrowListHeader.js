import React from 'react'
import { Row, Col, CardTitle, Button } from 'reactstrap'

import './arrow_list_header.scss'


const ArrowListHeader = () => {
    return (
        <div>
            <Row>
                <Col>
                    <div className='title-list-arrow'>
                        <CardTitle className='mb-0'><h3><b>List of arrows</b></h3></CardTitle>
                        <div className='small text-muted'>This is list of all arrows data</div>

                        <br />
                        <Button color='primary'>
                            <i className='cui-circle-check'></i> <b>Add Arrow</b>
                        </Button>
                    </div>
                </Col>

                <Col xs='4'>
                    <div className='btn-add-arrow' align='right'>
                        <input type='text' className='form-control' placeholder='Search arrow' />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ArrowListHeader