import React from 'react'
import { Table, Button, Card } from 'reactstrap'

import ArrowListHeader from './components/ArrowListHeader'
import Pagination from '../../components/Pagination/Pagination'


class ArrowList extends React.Component {

    render() {
        const { arrows } = this.props.dataState

        return (
            <div>
                <Card>
                    <ArrowListHeader />

                    <Table hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Arrow Type</th>
                                <th>Length</th>
                                <th>Diameter</th>
                                <th>Spine</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                typeof(arrows) === 'object' &&
                                arrows.map((arrow, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{i+1}</td>
                                            <td>{arrow.type}</td>
                                            <td>{arrow.length}</td>
                                            <td>{arrow.diameter}</td>
                                            <td>{arrow.spine}</td>
                                            <td>
                                                <Button color='success' size='sm'>
                                                    <i className='cui-magnifying-glass'></i>
                                                </Button>
                                                <span></span>
                                                <Button color="warning" size="sm" onClick={this.props.selectArrow.bind(this, arrow)}>
                                                    <i className="cui-note"></i>
                                                </Button>
                                                <span></span>
                                                <Button color="danger" size="sm" onClick={this.props.onDeleteArrow.bind(this, arrow.id)}>
                                                    <i className="cui-trash"></i>
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

export default ArrowList