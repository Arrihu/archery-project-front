import React from 'react'
import { Table, Button, Card, CardTitle } from 'reactstrap'

import Pagination from '../../components/Pagination/Pagination'
import './scss/archer.scss'

    
class ArcherList extends React.Component {

    render() {
        const { archers } = this.props.dataState
        return (
            <div>
                <Card>
                    <div className='archer-list-title'>
                        <CardTitle className='mb-0'><h3><b>List of archers</b></h3></CardTitle>
                        <div className='small text-muted'>This is list of all archers data</div>

                        <br />
                        <Button color='primary' onClick={this.props.toggleArcherForm}>
                            <i className='cui-circle-check'></i> <b>Add Archer</b>
                        </Button>
                    </div>
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
                                                <Button color='warning' size='sm' onClick={this.props.selectArcher.bind(this, archer)}>
                                                    <i className='cui-note'></i>
                                                </Button>
                                                <span></span>
                                                <Button color='danger' size='sm' onClick={this.props.onDeleteArcher.bind(this, archer.id)}>
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