import React from 'react'
import { Button, Card, CardHeader, CardBody } from 'reactstrap'

import './style/tournament.scss'


class TournamentForm extends React.Component {

    render() {
        const { name, address, start_date, end_date, mode } = this.props.dataState

        return(
            <div>                
                <h4><b>Setup your tournament</b></h4> <br />
                <Card>
                    <CardHeader><b>Basic Info</b></CardHeader>
                    <CardBody>
                        <form onSubmit={this.props.onCreateTournament}>
                            <div class="form-group row">
                                <label for="tournamentName" class="col-sm-2 col-form-label">Tournament name</label>
                                <div class="col-sm-10">
                                    <input type="text" name='name' value={name} onChange={this.props.handleChange} class="form-control" id="tournamentName" placeholder='Tournament name' />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="address" class="col-sm-2 col-form-label">Address</label>
                                <div class="col-sm-10">
                                    <input type="text" name='address' value={address} onChange={this.props.handleChange} class="form-control" id="address" placeholder='Address' />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="start_date" class="col-sm-2 col-form-label">Start date</label>
                                <div class="col-sm-10">
                                    <input type="date" name='start_date' value={start_date} onChange={this.props.handleChange} class="form-control" id="start_date" placeholder='Start date' />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="end_date" class="col-sm-2 col-form-label">End date</label>
                                <div class="col-sm-10">
                                    <input type="date" name='end_date' value={end_date} onChange={this.props.handleChange} class="form-control" id="end_date" placeholder='End date' />
                                </div>
                            </div>
                        </form>
                    </CardBody>
                </Card>
                <div align="right">
                    <Button color="primary" onClick={this.props.onCreateTournament}><b>Save Changes</b></Button>
                    <span className='btn-action-form-tournament-space'></span>
                    <Button onClick={this.props.onCancel}><b>Cancel</b></Button>
                </div>
                <br/>
            </div>
        )
    }
}

export default TournamentForm