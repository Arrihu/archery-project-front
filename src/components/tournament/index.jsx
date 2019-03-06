import React from 'react'
import { Button, Card, CardHeader, CardBody } from 'reactstrap'


class TournamentSetup extends React.Component {

    render() {
        return (
            <div>
                <br /> <h5>Setup your tournament</h5> <br />
                <Card>
                    <CardHeader>Basic Info</CardHeader>
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
                    <CardHeader>Game</CardHeader>
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
                    <CardHeader>Registration</CardHeader>
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
                <div align="right">
                    <Button color="danger">Save Changes</Button>
                </div>
            </div>
        )
    }
}

export default TournamentSetup