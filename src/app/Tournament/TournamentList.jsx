import React from 'react'
import { Table, Button, Card } from 'reactstrap'

import TournamentListHeader from './components/TournamentListHeader'
import Pagination from '../../components/Pagination/Pagination'
import './scss/tournament.scss'


class TournamentList extends React.Component {

    render() {
        const { tournaments } = this.props.dataState

        return(
            <div>
                <Card>
                    <TournamentListHeader />

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