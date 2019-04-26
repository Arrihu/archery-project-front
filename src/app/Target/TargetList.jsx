import React from 'react'
import { Table, Button, Card } from 'reactstrap'

import TargetListHeader from './components/TargetListHeader'
import Pagination from '../../components/Pagination/Pagination'


class TargetList extends React.Component {

    render() {
        const { targets } = this.props.dataState

        return (
            <div>
                <Card >
                    <TargetListHeader />

                    <Table hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Size</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                typeof(targets) === 'object' &&
                                targets.map((target, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{i+1}</td>
                                            <td>{target.name}</td>
                                            <td>{target.size}</td>
                                            <td>
                                                <Button color='success' size='sm'>
                                                    <i className='cui-magnifying-glass'></i>
                                                </Button>
                                                <span></span>
                                                <Button color='warning' size='sm' onClick={this.props.onSelectTarget.bind(this, target)}>
                                                    <i className='cui-note'></i>
                                                </Button>
                                                <span></span>
                                                <Button color='danger' size='sm' onClick={this.props.onDeleteTarget.bind(this, target.id)}>
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

export default TargetList