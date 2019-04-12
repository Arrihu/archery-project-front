import React from 'react'
import { Button, Table, Card, Row, Col } from 'reactstrap'

import './style/bow.scss'


class BowList extends React.Component {

    render() {
        const { bows } = this.props.dataState

        return (
            <div>
                <Card>
                    <Row>
                        <Col>
                            <div className="bow-list-title">
                                <h4><b>Bow List Data</b></h4>
                            </div>
                        </Col>

                        <Col>
                            <div className="btn-add-bow" align="right">
                                <Button color="primary" onClick={this.props.toggleBowForm}>
                                    <i className="cui-cursor"></i> <b>Add Bow</b>
                                </Button>
                            </div>
                        </Col>
                    </Row>

                    <Table>
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
                                                <Button color="warning" size="sm" onClick={this.props.selectBow.bind(this, bow)}>
                                                    <i className="cui-note"></i>
                                                </Button>

                                                <span style={{ paddingLeft: 5 }}></span>

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
                </Card>
            </div>
        )
    }
}

export default BowList