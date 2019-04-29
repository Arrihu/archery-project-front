import React from 'react'
import { Button, Card, CardTitle, Row, Col } from 'reactstrap'

import './club.scss'


class ClubForm extends React.Component {

    render() {
        const { name, address, mode } = this.props.dataState

        return (
            <div>
                <Card className='club-form-card'>
                    <CardTitle className='mb-0'><h5><b>Clubs</b></h5></CardTitle>
                    <div className='small text-muted'>Please fill the blank club data form !</div>

                    <br />
                    <form onSubmit={mode === 'update' ? this.props.onUpdateClub : this.props.onCreateClub}>
                        <Row>
                            <Col>
                                <div className="form-group">
                                    <label htmlFor="clubName">Club</label>
                                    <input type="text" name='name' value={name} onChange={this.props.handleChange} className="form-control" placeholder="Club name" />
                                </div>
                            </Col>

                            <Col>
                                <div className="form-group">
                                    <label htmlFor="clubAddress">Address</label>
                                    <input type="text" name='address' value={address} onChange={this.props.handleChange} className="form-control" placeholder="Address" />
                                </div>
                            </Col>
                        </Row>
                    </form>

                    <Button color="primary" type='submit' onClick={mode === 'update' ? this.props.onUpdateClub : this.props.onCreateClub}>Save</Button>

                    <span className='btn-space-club'></span>

                    <Button color="secondary" onClick={this.props.onCancel}><b>Cancel</b></Button>
                </Card>
            </div>
        )
    }
}

export default ClubForm