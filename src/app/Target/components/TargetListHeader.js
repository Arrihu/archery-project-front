import React from 'react'
import { Row, Col, CardTitle, Button } from 'reactstrap'

import './target_list_header.scss'


const TargetListHeader = () => {
    return (
        <div>
            <Row>
                <Col>
                    <div className='title-list-target'>
                        <CardTitle className='mb-0'><h3><b>List of targets</b></h3></CardTitle>
                        <div className='small text-muted'>This is list of all targets data</div>

                        <br />
                        <Button color='primary'>
                            <i className='cui-circle-check'></i> <b>Add Target</b>
                        </Button>
                    </div>
                </Col>

                <Col xs='4'>
                    <div className='btn-add-target' align='right'>
                        <input type='text' className='form-control' placeholder='Search target' />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default TargetListHeader