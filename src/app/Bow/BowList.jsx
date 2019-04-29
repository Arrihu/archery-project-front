import React from 'react'
import { Button, Table, Card, CardTitle, Row, Col } from 'reactstrap'

import Pagination from '../../components/Pagination/Pagination'
import './bow.scss'


class BowList extends React.Component {

    render() {
        const { bows } = this.props.dataState

        return (
            <div>
                <Card>
                    <Row>
                        <Col>
                            <div className='bow-list-title'>
                                <CardTitle className='mb-0'><h3><b>List of bows</b></h3></CardTitle>
                                <div className='small text-muted'>This is list of all bows data</div>

                                <br />
                                <Button color='primary' onClick={this.props.toggleBowForm}>
                                    <i className='cui-circle-check'></i> <b>Add Bow</b>
                                </Button>
                            </div>
                        </Col>

                        <Col xs='4'>
                            <div className='search-bow' align='right'>
                                <input type='text' className='form-control' placeholder='Search bow' />
                            </div>
                        </Col>
                    </Row>

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