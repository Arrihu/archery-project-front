import React from 'react'
import { Card, Form, Input, FormGroup, Label, Button, Row, Col } from 'reactstrap'

import ClubSelect from '../../components/ClubSelect/ClubSelect'
import TournamentSelect from '../../components/TournamentSelect/TournamentSelect'
import './scss/archer.scss'


class ArcherForm extends React.Component {

    render() {
        return (
            <div>
                <Card className='archer-form-card'>
                    <div>
                        <h5 className='mb-0'><b>Archer form</b></h5>
                        <div className='small text-muted'>Add or update your archer data</div>
                    </div>

                    <br/>
                    <Form onSubmit={this.props.onCreateArcher}>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label>Name</Label>
                                    <Input type="text" name='name' className='form-control' placeholder='Name' value={this.props.dataState.name} onChange={this.props.handleChange} />
                                </FormGroup>
                            </Col>

                            <Col>
                                <FormGroup>
                                    <Label>Gender</Label>
                                    <Input type="text" name='gender' className='form-control' placeholder='Gender' value={this.props.dataState.gender} onChange={this.props.handleChange} />
                                </FormGroup>
                            </Col>

                            <Col>
                                <FormGroup>
                                    <Label>Age</Label>
                                    <Input type="text" name='age' className='form-control' placeholder='Name' value={this.props.dataState.age} onChange={this.props.handleChange} />
                                </FormGroup>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label>Pilih Club</Label>
                                    <ClubSelect name='clubId' handleChange={this.props.handleChange} />
                                </FormGroup>
                            </Col>

                            <Col>
                                <FormGroup>
                                    <Label>Pilih Tournament</Label>
                                    <TournamentSelect name='tournamentId' handleChange={this.props.handleChange} />
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>

                    <br/>
                    <div>
                        <Button color='primary' onClick={this.props.onCreateArcher}>Save Changes</Button>
                    </div>
                </Card>
            </div>
        )
    }
}

export default ArcherForm