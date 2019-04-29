import React from 'react'
import { Table, Button, Card, CardTitle, Row, Col } from 'reactstrap'

import Pagination from '../../components/Pagination/Pagination'
import './target.scss'


class TargetList extends React.Component {

    render() {
        const { targets } = this.props.dataState

        return (
            <div>
                <Card>
                    <Row>
                        <Col>
                            <div className='target-list-title'>
                                <CardTitle className='mb-0'><h3><b>List of targets</b></h3></CardTitle>
                                <div className='small text-muted'>This is list of all targets data</div>

                                <br />
                                <Button color='primary' onClick={this.props.toggleTargetForm}>
                                    <i className='cui-circle-check'></i> <b>Add Target</b>
                                </Button>
                            </div>
                        </Col>

                        <Col xs='4'>
                            <div className='search-target' align='right'>
                                <input type='text' className='form-control' placeholder='Search target' />
                            </div>
                        </Col>
                    </Row>

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