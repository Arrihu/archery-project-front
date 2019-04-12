import React from 'react'
import { Table, Button, Card, Row, Col } from 'reactstrap'

import './style/club.scss'


class ClubList extends React.Component {

    render() {
        const { clubs } = this.props.dataState

        return (
            <div>
                <Card>
                    <Row>
                        <Col>
                            <div className="list-club-title">
                                <h4><b>List Club Data</b></h4>
                            </div>
                        </Col>

                        <Col>
                            <div className="btn-add-club" align="right">
                                <Button color='primary' onClick={this.props.toggleClubForm}>
                                    <i className='cui-cursor'></i> <b>Add Club</b>
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
                                <th>Action</th>    
                            </tr>
                        </thead>

                        <tbody>
                            {
                                typeof(clubs) === 'object' &&
                                clubs.map((club, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{i+1}</td>
                                            <td>{club.name}</td>
                                            <td>{club.address}</td>
                                            <td>
                                                <Button color='warning' size='sm' onClick={this.props.selectClub.bind(this, club)}>
                                                    <i className='cui-note'></i>
                                                </Button>
                                                <span className='btn-action-space'></span>
                                                <Button color='danger' size='sm' onClick={this.props.onDeleteClub.bind(this, club.id)}>
                                                    <i className='cui-trash'></i>
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

export default ClubList