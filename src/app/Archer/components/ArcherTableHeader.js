import React from 'react'
import { Row, Col, CardTitle, Button } from 'reactstrap'

import './archer_table_header.scss'


const ArcherTableHeader = () => {
    return (
        <div>
            <Row>
                <Col>
                    <div className='title-list-archer'>
                        <CardTitle className='mb-0'><h3><b>List of archers</b></h3></CardTitle>
                        <div className='small text-muted'>This is list of all archers data</div>

                        <br />
                        <Button color='primary'>
                            <i className='cui-circle-check'></i> <b>Add Archer</b>
                        </Button>
                    </div>
                </Col>

                <Col xs='4'>
                    <div className='btn-add-archer' align='right'>
                        <input type='text' className='form-control' placeholder='Search archer' />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ArcherTableHeader