import React from 'react'
import { Button, Card, CardTitle, Row, Col } from 'reactstrap'

import './bow.scss'


class BowForm extends React.Component {

    render() {
        const { type, length, weight, mode } = this.props.dataState

        return (
            <div>
                <Card className='bow-form-card'>
                    <CardTitle className='mb-0'><h5><b>Bows</b></h5></CardTitle>
                    <div className='small text-muted'>Please fill the blank bow data form !</div>

                    <br />
                    <form onSubmit={mode === 'update' ? this.props.onUpdateBow : this.props.onCreateBow}>
                        <Row>
                            <Col>
                                <div className="form-group">
                                    <label htmlFor="bowType">Bow Type</label>
                                    <input type="text" name='type' value={type} onChange={this.props.handleChange} className="form-control" placeholder="Bow type" />
                                </div>
                            </Col>

                            <Col>
                                <div className="form-group">
                                    <label htmlFor="drawLength">Bow Length</label>
                                    <input type="text" name='length' value={length} onChange={this.props.handleChange} className="form-control" placeholder="Draw length" />
                                </div>
                            </Col>

                            <Col>
                                <div className="form-group">
                                    <label htmlFor="drawWeight">Bow Weight</label>
                                    <input type="text" name='weight' value={weight} onChange={this.props.handleChange} className="form-control" placeholder="Draw weight" />
                                </div>
                            </Col>
                        </Row>
                    </form>

                    <Button color="primary" onClick={mode === 'update' ? this.props.onUpdateBow : this.props.onCreateBow}>Save</Button>

                    <span className='btn-space-bow'></span>

                    <Button color="secondary" onClick={this.props.cancelAction}>Cancel</Button>
                </Card>
            </div>
        )
    }
}

export default BowForm