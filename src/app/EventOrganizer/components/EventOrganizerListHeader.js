import React from 'react'
import { Row, Col, CardTitle, Button } from 'reactstrap'

import './eo_list_header.scss'


const EventOrganizerListHeader = () => {
    return (
        <div>
            <Row>
                <Col>
                    <div className='title-list-eo'>
                        <CardTitle className='mb-0'><h3><b>List of event organizer</b></h3></CardTitle>
                        <div className='small text-muted'>This is list of all event organizer data</div>

                        <br />
                        <Button color='primary'>
                            <i className='cui-circle-check'></i> <b>Add Event Organizer</b>
                        </Button>
                    </div>
                </Col>

                <Col xs='4'>
                    <div className='btn-add-eo' align='right'>
                        <input type='text' className='form-control' placeholder='Search event organizer' />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default EventOrganizerListHeader