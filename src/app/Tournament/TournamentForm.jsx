import React from 'react'
import { Button, Card, CardTitle, Row, Col } from 'reactstrap'

import './scss/tournament.scss'


class TournamentForm extends React.Component {

    render() {
        const { name, address, start_date, end_date, mode } = this.props.dataState

        return(
            <div>
                <Card className='tournament-form-card'>
                    <CardTitle className='mb-0'><h5><b>Tournaments</b></h5></CardTitle>
                    <div className="small text-muted">Setup or edit your tournament</div>

                    <br />
                    <form onSubmit={this.props.onCreateTournament}>
                        <Row>
                            <Col>
                                <div class="form-group">
                                    <label for="tournamentName">Tournament name</label>
                                    <input type="text" name='name' value={name} onChange={this.props.handleChange} class="form-control" id="tournamentName" placeholder='Tournament name' />
                                </div>
                            </Col>

                            <Col>
                                <div class="form-group">
                                    <label for="address">Address</label>
                                    <input type="text" name='address' value={address} onChange={this.props.handleChange} class="form-control" id="address" placeholder='Address' />
                                </div>
                            </Col>

                            <Col>
                                <div class="form-group">
                                    <label for="start_date">Start date</label>
                                    <input type="date" name='start_date' value={start_date} onChange={this.props.handleChange} class="form-control" id="start_date" placeholder='Start date' />
                                </div>
                            </Col>

                            <Col>
                                <div class="form-group">
                                    <label for="end_date">End date</label>
                                    <input type="date" name='end_date' value={end_date} onChange={this.props.handleChange} class="form-control" id="end_date" placeholder='End date' />
                                </div>
                            </Col>
                        </Row>
                    </form>

                    <Button color="primary" onClick={this.props.onCreateTournament}><b>Submit</b></Button>
                    <span className='btn-action-form'></span>
                    <Button onClick={this.props.onCancel}><b>Cancel</b></Button>
                </Card>
            </div>
        )
    }
}

export default TournamentForm