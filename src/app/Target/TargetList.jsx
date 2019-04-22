import React from 'react'
import { Table, Button, Card, Row, Col } from 'reactstrap'


class TargetList extends React.Component {

    render() {
        const { targets } = this.props.dataState

        return (
            <div>
                <Card >
                    <Row>
                        <Col>
                            <div className='target-list-title'>
                                <h3><b>Target List Data</b></h3>
                            </div>
                        </Col>
                        <Col>
                            <div className='btn-target-list-add' align='right'>
                                <Button color='primary' onClick={this.props.toggleTargetForm}>
                                    <i className='cui-cursor'></i> <b>Add Target</b>
                                </Button>
                            </div>
                        </Col>
                    </Row>

                    <Table>
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
                                                <Button color='warning' size='sm' onClick={this.props.onSelectTarget.bind(this, target)}>
                                                    <i className='cui-note'></i>
                                                </Button>
                                                <span className='btn-list-action'></span>
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
                </Card>
            </div>
        )
    }
}

export default TargetList