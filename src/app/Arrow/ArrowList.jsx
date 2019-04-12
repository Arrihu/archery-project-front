import React from 'react'
import { Table, Button, Card, Row, Col } from 'reactstrap'


class ArrowList extends React.Component {

    render() {
        const { arrows } = this.props.dataState

        return (
            <div>
                <Card>
                    <Row>
                        <Col>
                            <div className='list-arrow-title'>
                                <h4><b>List Arrow Data</b></h4>
                            </div>
                        </Col>

                        <Col>
                            <div className='btn-add-arrow' align='right'>
                                <Button color='primary' onClick={this.props.toggleArrowForm}>
                                    <i className='cui-cursor'></i> <b>Add Arrow</b>
                                </Button>
                            </div>
                        </Col>
                    </Row>

                    <Table>
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
                                                <Button color="warning" size="sm" onClick={this.props.selectArrow.bind(this, arrow)}>
                                                    <i className="cui-note"></i>
                                                </Button>

                                                <span style={{ paddingLeft: 5 }}></span>

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
                </Card>
            </div>
        )
    }
}

export default ArrowList