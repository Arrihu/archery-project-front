import React from 'react'
import { Table, Button, Card, CardTitle, Row, Col } from 'reactstrap'

import Pagination from '../../components/Pagination/Pagination'


class ArrowList extends React.Component {

    render() {
        const { arrows } = this.props.dataState

        return (
            <div>
                <Card>
                    <Row>
                        <Col>
                            <div className='arrow-list-title'>
                                <CardTitle className='mb-0'><h3><b>List of arrows</b></h3></CardTitle>
                                <div className='small text-muted'>This is list of all arrows data</div>

                                <br />
                                <Button color='primary' onClick={this.props.toggleArrowForm}>
                                    <i className='cui-circle-check'></i> <b>Add Arrow</b>
                                </Button>
                            </div>
                        </Col>

                        <Col xs='4'>
                            <div className='search-arrow' align='right'>
                                <input type='text' className='form-control' placeholder='Search arrow' />
                            </div>
                        </Col>
                    </Row>

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