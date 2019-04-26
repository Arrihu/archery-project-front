import React from 'react'
import { Row, Col, CardTitle, Button } from 'reactstrap'

import './tournament_list_header.scss'


const TournamentListHeader = () => {
    return (
        <div>
            <Row>
                <Col>
                    <div className='title-list-tournament'>
                        <CardTitle className='mb-0'><h3><b>List of tournaments</b></h3></CardTitle>
                        <div className='small text-muted'>This is list of all tournaments data</div>

                        <br />
                        <Button color='primary'>
                            <i className='cui-circle-check'></i> <b>Add Tournament</b>
                        </Button>
                    </div>
                </Col>

                <Col xs='4'>
                    <div className='btn-add-tournament' align='right'>
                        <input type='text' className='form-control' placeholder='Search tournament' />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default TournamentListHeader