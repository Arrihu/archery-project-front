import React from 'react'
import { Table, Button, Card } from 'reactstrap'

import ArcherTableHeader from './components/ArcherTableHeader'
import Pagination from '../../components/Pagination/Pagination'
import './scss/archer.scss'


class ArcherList extends React.Component {

    render() {
        const { archers } = this.props.dataState
        return (
            <div>
                <Card>
                    <ArcherTableHeader archerTableHeader={this.props.archerTableHeader} />
    
                    <Table hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Age</th>
                                <th>Club</th>
                                <th>Tournament</th>
                                <th>Action</th>
                            </tr>
                        </thead>
    
                        <tbody>
                            {
                                typeof(archers) === 'object' &&
                                archers.map((archer, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{i+1}</td>
                                            <td>{archer.name}</td>
                                            <td>{archer.gender}</td>
                                            <td>{archer.age}</td>
                                            <td>{archer.clubId}</td>
                                            <td>{archer.tournamentId}</td>
                                            <td>
                                                <Button color='success' size='sm'>
                                                    <i className='cui-magnifying-glass'></i>
                                                </Button>
                                                <span></span>
                                                <Button color='warning' size='sm'>
                                                    <i className='cui-note'></i>
                                                </Button>
                                                <span></span>
                                                <Button color='danger' size='sm'>
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

export default ArcherList