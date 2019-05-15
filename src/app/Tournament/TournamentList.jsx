import React from 'react'
import { Table, Button, Card, CardTitle, Row, Col } from 'reactstrap'

import Pagination from '../../components/Pagination/Pagination'
import './tournament.scss'


class TournamentList extends React.Component {
    render() {
        const { tournaments } = this.props.dataState

        return(
            <div>
                <Card>
                    <Row>
                        <Col>
                            <div className='tournament-list-title'>
                                <CardTitle className='mb-0'><h3><b>List of tournaments</b></h3></CardTitle>
                                <div className='small text-muted'>This is list of all tournaments data</div>

                                <br />
                                <Button color='primary' onClick={this.props.toggleTournamentForm}>
                                    <i className='cui-circle-check'></i> <b>Add Tournament</b>
                                </Button>
                            </div>
                        </Col>

                        <Col xs='4'>
                            <div className='search-tournament' align='right'>
                                <input type='text' className='form-control' placeholder='Search tournament' />
                            </div>
                        </Col>
                    </Row>

                    <Table hover>
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
                                                <Button color='success' size='sm'>
                                                    <i className='cui-magnifying-glass'></i>
                                                </Button>
                                                <span></span>
                                                <Button color="warning" size="sm" 
                                                    onClick={this.props.selectTournament.bind(this, tournament)}>
                                                    <i className="cui-note" />
                                                </Button>
                                                <span></span>
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

                    <br />
                    <br />
                    <Pagination />
                </Card>
            </div>
        )
    }
}

export default TournamentList