import React from 'react'
import { Link } from 'react-router-dom'
import { Form, FormGroup, Label, Row, Col, Button, Card } from 'reactstrap'
import ArcherForm from '../Archer/ArcherForm'
import CategorySelect from '../../components/CategorySelect/CategorySelect'
import './tournament.scss'


class TournamentSetting extends React.Component {
    render() {
        return (
            <div>
                <Card className='tournament-setting-form-card'>
                    <div className='tournament-setting-header'>
                        <h5><b>Tournament Setting</b></h5>
                    </div>

                    <div className='small text-muted'>Setting your tournament</div>
                    <br/>

                    <Form>
                        <Row>
                            <Col>
                                
                            </Col>

                            <Col>
                                <FormGroup>
                                    <Label>Pilih Kategori Lomba</Label>
                                    <CategorySelect />
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>

                    <div align='right'>
                        <Link to='/system' className='btn btn-success'>Next</Link>
                    </div>
                </Card>
            </div>
        )
    }
}

export default TournamentSetting