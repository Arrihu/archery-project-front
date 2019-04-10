import React from 'react'
import { Card, Button, Row, Col } from 'reactstrap'

import './components/arrow.scss'


class ArrowForm extends React.Component {

    render() {
        return (
            <div>
                <Card className='form-card'>
                    <h5><strong>Add Arrow Data</strong></h5>
                    <form action="">
                        <br/>
                        <Row>
                            <Col>
                                <div className="form-group">
                                    <label htmlFor="arrowType">Arrow Type</label>
                                    <input type="text" className="form-control" placeholder="Arrow type" />
                                </div>
                            </Col>

                            <Col>
                                <div className="form-group">
                                    <label htmlFor="arrowLength">Length</label>
                                    <input type="text" className="form-control" placeholder="Length" />
                                </div>
                            </Col>

                            <Col>
                                <div className="form-group">
                                    <label htmlFor="arrowDiameter">Diameter</label>
                                    <input type="text" className="form-control" placeholder="Diameter" />
                                </div>
                            </Col>
                        </Row>
                    </form>

                    <Button className='btn-save' color="primary">Save</Button>
                    <span className='btn-space'></span>
                    <Button color="secondary" onClick={this.props.dataToggle}>Cancel</Button>
                </Card>
            </div>
        )
    }
}

export default ArrowForm