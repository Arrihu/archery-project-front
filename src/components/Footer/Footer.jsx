import React from 'react'
import { Row, Col, Container } from 'reactstrap'


class FooterComponent extends React.Component {

    render() {
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col>
                            <p>Footer 1</p>
                        </Col>

                        <Col>
                            <p>Footer 2</p>
                        </Col>

                        <Col>
                            <p>Footer 3</p>
                        </Col>

                        <Col>
                            <p>Footer 4</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default FooterComponent