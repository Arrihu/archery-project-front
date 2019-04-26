import React from 'react'
import { Button, Table, Card } from 'reactstrap'

import BowListHeader from './components/BowListHeader'
import Pagination from '../../components/Pagination/Pagination'
import './scss/bow.scss'


class BowList extends React.Component {

    render() {
        const { bows } = this.props.dataState

        return (
            <div>
                <Card>
                    <BowListHeader />

                    <Table hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Bow Type</th>
                                <th>Bow Length (Inch)</th>
                                <th>Bow Weight (LBS)</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                typeof(bows) === 'object' &&
                                bows.map((bow, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{i+1}</td>
                                            <td>{bow.type}</td>
                                            <td>{bow.length}</td>
                                            <td>{bow.weight}</td>
                                            <td>
                                                <Button color='success' size='sm'>
                                                    <i className='cui-magnifying-glass'></i>
                                                </Button>
                                                <span></span>
                                                <Button color="warning" size="sm" onClick={this.props.selectBow.bind(this, bow)}>
                                                    <i className="cui-note"></i>
                                                </Button>
                                                <span></span>
                                                <Button color="danger" size="sm" onClick={this.props.onDeleteBow.bind(this, bow.id)}>
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

export default BowList