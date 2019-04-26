import React from 'react'
import { Table, Button, Card } from 'reactstrap'

import ClubListHeader from './components/ClubListHeader'
import Pagination from '../../components/Pagination/Pagination'
import './scss/club.scss'


class ClubList extends React.Component {

    render() {
        const { clubs } = this.props.dataState

        return (
            <div>
                <Card>
                    <ClubListHeader />

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