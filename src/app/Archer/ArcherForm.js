import React from 'react'
import { Card, Button, Row, Col } from 'reactstrap'


class ArcherForm extends React.Component {

    render() {
        const { name, gender, age } = this.props.dataState

        return (
            <div>
                <Card>
                    <form action="">
                        <Row>
                            <Col>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name='name' className='form-control' placeholder='Name' value={name} onChange={this.props.handleChange} />
                                </div>
                            </Col>

                            <Col>
                                <div className="form-group">
                                    <label htmlFor="gender">Gender</label>
                                    <input type="text" name='gender' className='form-control' placeholder='Gender' value={gender} onChange={this.props.handleChange} />
                                </div>
                            </Col>

                            <Col>
                                <div className="form-group">
                                    <label htmlFor="age">Age</label>
                                    <input type="text" name='age' className='form-control' placeholder='Name' value={age} onChange={this.props.handleChange} />
                                </div>
                            </Col>
                        </Row>
                    </form>
                </Card>
            </div>
        )
    }
}

export default ArcherForm