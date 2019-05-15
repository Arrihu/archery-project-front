import React from 'react'
import { Form, FormGroup, Input, Label, Row, Col, Button, Card } from 'reactstrap'

import './tournament.scss'


class TournamentSystem extends React.Component {

    render() {
        return (
            <div>
                <Card className='tournament-setting-form-card'>
                    <div className='tournament-system-header'>
                        <h5><b>Tournament System</b></h5>
                    </div>

                    <br/>

                    <Form>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label>Jumlah Rambahan</Label>
                                    <Input type='text' className='form-control' />
                                </FormGroup>
                            </Col>

                            <Col>
                                <FormGroup>
                                    <Label>Pilih Arrow</Label>
                                </FormGroup>
                            </Col>

                            <Col>
                                <FormGroup>
                                    <Label>Pilih Kategori Lomba</Label>
                                </FormGroup>
                            </Col>
                        </Row>

                        <br/>
                        <div align='right'>
                            <Button color='primary'>Submit</Button>
                        </div>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default TournamentSystem