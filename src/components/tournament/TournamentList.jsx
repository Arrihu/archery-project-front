import React from 'react';
import { Table, Button } from 'reactstrap';


class TournamentList extends React.Component {

    render() {
        const { tournaments } = this.props.dataState;

        return(
            <div>
                <div className="row">
                    <div className="col-sm-6">
                        <h5>Tournament Data</h5>
                    </div>
                    <div className="col-sm-6" align="right">
                        <a href="http://localhost:3000/#/tournament-setup"
                        type="button" style={{ padding: 10, backgroundColor: "#59c8e6",
                        color: '#ffffff' }}
                        >
                            <i className="cui-cursor" /> Add Tournament
                        </a>
                    </div>
                </div>
                <br />
                
                <div className="card">
                    <Table>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Type</th>
                                <th>Format</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                typeof(tournaments) === "object" &&
                                tournaments.map((tournament, i) => {
                                    return(
                                        <tr key={i}>
                                            <td>{i+1}</td>
                                            <td>{tournament.nama}</td>
                                            <td>{tournament.lokasi}</td>
                                            <td>{tournament.alamat}</td>
                                            <td>{tournament.tanggal_mulai}</td>
                                            <td>{tournament.tanggal_berakhir}</td>
                                            <td>
                                                <Button color="warning" size="sm" 
                                                    onClick={this.props.selectTournament.bind(this, tournament)}>
                                                    <i className="cui-note" />
                                                </Button>

                                                <span style={{paddingLeft: 5}}></span>

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
                </div>
            </div>
        )
    }
}

export default TournamentList