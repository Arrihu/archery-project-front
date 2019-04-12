import React from 'react'
import { Card, Button, Row, Col } from 'reactstrap'

import './style/arrow.scss'


class ArrowForm extends React.Component {

    render() {
        const { type, length, diameter, spine, mode } = this.props.dataState

        return (
            <div>
                <Card className='form-card'>
                    {/* title */}
                    <h5><strong>Arrow Data</strong></h5>
                    {/* arrow form */}
                    <form onSubmit={mode === 'update' ? this.props.onUpdateArrow : this.props.onCreateArrow}>
                        <Row>
                            <Col>
                                <div className="form-group">
                                    <label htmlFor="arrowType">Type</label>
                                    <input type="text" name='type' value={type} onChange={this.props.handleChange} className="form-control" placeholder="Arrow type" />
                                </div>
                            </Col>

                            <Col>
                                <div className="form-group">
                                    <label htmlFor="arrowLength">Length</label>
                                    <input type="text" name='length' value={length} onChange={this.props.handleChange} className="form-control" placeholder="Length" />
                                </div>
                            </Col>

                            <Col>
                                <div className="form-group">
                                    <label htmlFor="arrowDiameter">Diameter</label>
                                    <input type="text" name='diameter' value={diameter} onChange={this.props.handleChange} className="form-control" placeholder="Diameter" />
                                </div>
                            </Col>

                            <Col>
                                <div className="form-group">
                                    <label htmlFor="arrowDiameter">Spine</label>
                                    <input type="text" name='spine' value={spine} onChange={this.props.handleChange} className="form-control" placeholder="Spine" />
                                </div>
                            </Col>
                        </Row>
                    </form>

                    {/* button action */}
                    <Button className='btn-save' type='submit' color="primary" onClick={mode === 'update' ? this.props.onUpdateArrow : this.props.onCreateArrow}><b>Save</b></Button>

                    <span className='btn-space'></span>

                    <Button color="secondary" onClick={this.props.toggleArrowForm}><b>Cancel</b></Button>
                </Card>
            </div>
        )
    }
}

export default ArrowForm