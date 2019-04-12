import React from 'react'
import { Table, Button, Card, Row, Col } from 'reactstrap'

import './style/tournament.scss'


class TournamentList extends React.Component {

    render() {
        const { tournaments } = this.props.dataState

        return(
            <div>
                <Card>
                    <Row>
                        <Col>
                            <div className="tournament-list-title">
                                <h4><b>List Tournament Data</b></h4>
                            </div>
                        </Col>

                        <Col>
                            <div className="btn-add-tournament" align="right">
                                <Button color='primary' onClick={this.props.toggleTournamentForm}>
                                    <i className="cui-cursor" /> <b>Add Tournament</b>
                                </Button>
                            </div>
                        </Col>
                    </Row>
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                typeof(tournaments) === "object" &&
                                tournaments.map((tournament, i) => {
                                    return(
                                        <tr key={i}>
                                            <td>{i+1}</td>
                                            <td>{tournament.name}</td>
                                            <td>{tournament.address}</td>
                                            <td>{tournament.start_date}</td>
                                            <td>{tournament.end_date}</td>
                                            <td>
                                                <Button color="warning" size="sm" 
                                                    onClick={this.props.selectTournament.bind(this, tournament)}>
                                                    <i className="cui-note" />
                                                </Button>

                                                <span className='btn-list-tournament-action'></span>

                                                <Button color="danger" size="sm" 
                                                    onClick={this.props.onDeleteTournament.bind(this, tournament.id)}>
                                                    <i className="cui-trash" />
                                                </Button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </Card>
            </div>
        )
    }
}

export default TournamentList