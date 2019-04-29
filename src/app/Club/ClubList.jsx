import React from 'react'
import { Table, Button, Card, CardTitle, Row, Col } from 'reactstrap'

import Pagination from '../../components/Pagination/Pagination'
import './club.scss'


class ClubList extends React.Component {

    render() {
        const { clubs } = this.props.dataState

        return (
            <div>
                <Card>
                    <Row>
                        <Col>
                            <div className='list-club-title'>
                                <CardTitle className='mb-0'><h3><b>List of clubs</b></h3></CardTitle>
                                <div className='small text-muted'>This is list of all clubs data</div>

                                <br />
                                <Button color='primary' onClick={this.props.toggleClubForm}>
                                    <i className='cui-circle-check'></i> <b>Add Club</b>
                                </Button>
                            </div>
                        </Col>

                        <Col xs='4'>
                            <div className='search-club' align='right'>
                                <input type='text' className='form-control' placeholder='Search club' />
                            </div>
                        </Col>
                    </Row>

                    <Table hover>
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
                                                <Button color='success' size='sm'>
                                                    <i className='cui-magnifying-glass'></i>
                                                </Button>
                                                <span></span>
                                                <Button color='warning' size='sm' onClick={this.props.selectClub.bind(this, club)}>
                                                    <i className='cui-note'></i>
                                                </Button>
                                                <span></span>
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

                    <br />
                    <br />
                    <Pagination />
                </Card>
            </div>
        )
    }
}

export default ClubList