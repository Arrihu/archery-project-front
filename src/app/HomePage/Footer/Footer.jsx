import React from 'react'
import { Row, Col, Container } from 'reactstrap'

import './footer.scss'


class FooterComponent extends React.Component {

    render() {
        return (
            <div className='footer'>
                <br/>
                <Container fluid>
                    <Row>
                        <Col>
                            <h3>Archery Tournament</h3>
                        </Col>

                        <Col>
                            <h3>Footer 2</h3>
                        </Col>

                        <Col>
                            <h3>Footer 3</h3>
                        </Col>

                        <Col>
                            <h3>Social Media</h3>
                            <br/>
                            <Row>
                                <Col>
                                    <i class="fab fa-facebook fa-2x"></i>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <br/>
                <br/>
            </div>
        )
    }
}

export default FooterComponent