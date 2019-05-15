import React from 'react'
import {Link} from 'react-router-dom'
import { Button, Card, CardTitle, Row, Col } from 'reactstrap'

import './tournament.scss'


class TournamentForm extends React.Component {

    render() {
        const { name, address, start_date, end_date, mode } = this.props.dataState

        return(
            <div>
                <Card className='tournament-form-card'>
                    <CardTitle className='mb-0'><h5><b>Baic info</b></h5></CardTitle>
                    <div className="small text-muted">Setup your tournament</div>

                    <br />
                    <form onSubmit={this.props.onCreateTournament}>
                        <Row>
                            <Col>
                                <div className="form-group">
                                    <label htmlFor="tournamentName">Tournament name</label>
                                    <input type="text" name='name' value={name} onChange={this.props.handleChange} className="form-control" id="tournamentName" placeholder='Tournament name' />
                                </div>
                            </Col>

                            <Col>
                                <div className="form-group">
                                    <label htmlFor="address">Address</label>
                                    <input type="text" name='address' value={address} onChange={this.props.handleChange} className="form-control" id="address" placeholder='Address' />
                                </div>
                            </Col>

                            <Col>
                                <div className="form-group">
                                    <label htmlFor="start_date">Start date</label>
                                    <input type="date" name='start_date' value={start_date} onChange={this.props.handleChange} className="form-control" id="start_date" placeholder='Start date' />
                                </div>
                            </Col>

                            <Col>
                                <div className="form-group">
                                    <label htmlFor="end_date">End date</label>
                                    <input type="date" name='end_date' value={end_date} onChange={this.props.handleChange} className="form-control" id="end_date" placeholder='End date' />
                                </div>
                            </Col>
                        </Row>

                        {/* <div>
                            <Button color="primary" onClick={this.props.onCreateTournament}>Submit</Button>
                            <span className='btn-action-form'></span>
                            <Button onClick={this.props.onCancel}>Cancel</Button>
                        </div> */}
                        <div align='right'>
                            <Button color='success' type='submit'>Next</Button>
                        </div>
                    </form>
                </Card>
            </div>
        )
    }
}

export default TournamentForm