import React from 'react'
import { Button, Card, CardTitle, Row, Col } from 'reactstrap'

import './target.scss'


class TargetForm extends React.Component {

    render() {
        const { name, size, mode } = this.props.dataState

        return (
            <div>
                <Card className='target-form-card'>
                    <CardTitle className='mb-0'><h5><b>Targets</b></h5></CardTitle>
                    <div className='small text-muted'>Please fill the blank target data form !</div>

                    <br />
                    <form onSubmit={mode === 'update' ? this.props.onUpdateTarget : this.props.onCreateTarget}>
                        <Row>
                            <Col>
                                <div className="form-group">
                                    <label htmlFor="targetName">Name</label>
                                    <input type="text" name='name' className='form-control' placeholder='Target name' value={name} onChange={this.props.handleChange} />
                                </div>
                            </Col>

                            <Col>
                                <div className="form-group">
                                    <label htmlFor="targetSize">Size</label>
                                    <input type="text" name='size' className='form-control' placeholder='Target size' value={size} onChange={this.props.handleChange} />
                                </div>
                            </Col>
                        </Row>
                    </form>
                    
                    <Button color='primary' type='submit' onClick={mode === 'update' ? this.props.onUpdateTarget : this.props.onCreateTarget}><b>Save Changes</b></Button>
                    <span className='btn-form-action'></span>
                    <Button onClick={this.props.onCancel}><b>Cancel</b></Button>
                </Card>
            </div>
        )
    }
}

export default TargetForm