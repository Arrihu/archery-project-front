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
                        <form>
                            <div class="form-group row">
                                <label for="tournamentName" class="col-sm-2 col-form-label">Tournament name</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="tournamentName" />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="address" class="col-sm-2 col-form-label">Address</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="address" />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="start_date" class="col-sm-2 col-form-label">Start date</label>
                                <div class="col-sm-10">
                                    <input type="password" class="form-control" id="start_date" />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="end_date" class="col-sm-2 col-form-label">End date</label>
                                <div class="col-sm-10">
                                    <input type="password" class="form-control" id="end_date" />
                                </div>
                            </div>
                        </form>
                    </CardBody>
                </Card>

                <br />
                <hr></hr>
                <br />

                <Card>
                    <CardHeader><b>Game</b></CardHeader>
                    <CardBody>
                        <form>
                            <div class="form-group row">
                                <label for="type" class="col-sm-2 col-form-label">Type</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="type" />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="format" class="col-sm-2 col-form-label">Format</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="format" />
                                </div>
                            </div>
                        </form>
                    </CardBody>
                </Card>

                <br />
                <hr></hr>
                <br />

                <Card>
                    <CardHeader><b>Registration</b></CardHeader>
                    <CardBody>
                        <form>
                            <div class="form-group row">
                                <label for="tournamentName" class="col-sm-2 col-form-label">Tournament name</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="tournamentName" />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="address" class="col-sm-2 col-form-label">Address</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="address" />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="start_date" class="col-sm-2 col-form-label">Start date</label>
                                <div class="col-sm-10">
                                    <input type="password" class="form-control" id="start_date" />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="end_date" class="col-sm-2 col-form-label">End date</label>
                                <div class="col-sm-10">
                                    <input type="password" class="form-control" id="end_date" />
                                </div>
                            </div>
                        </form>
                    </CardBody>
                </Card>

                <div align="right">
                    <Button color="primary"><b>Save Changes</b></Button>
                    <span className='btn-action-form-tournament-space'></span>
                    <Button><b>Cancel</b></Button>
                </div>
                <br/>
            </div>
        )
    }
}

export default TournamentForm