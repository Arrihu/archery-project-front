import React from 'react'
import { Container, Button, Card, Row, Col } from 'reactstrap'

import './homepage.scss'
import Navbar from './Navbar/Navbar'
import JumbotronComponent from './Jumbotron/Jumbotron'
import FooterComponent from './Footer/Footer'


class FrontPage extends React.Component {

    render() {
        return (
            <div>
                <Navbar />
                <JumbotronComponent />                

                <body>
                    <section className='top-rank-section'>
                        <Container>
                            <h1>Top Rank</h1>
                            <hr/>
                            <Row>
                                <Col>
                                    <Card className='top-rank'>
                                        <p>We aim to keep things simple, but there's plenty more to explore,including bracket predictions, voting, and themeable brackets for your website.</p>
                                    </Card>
                                </Col>

                                <Col>
                                    <Card className='top-rank'>
                                        <p>We aim to keep things simple, but there's plenty more to explore,including bracket predictions, voting, and themeable brackets for your website.</p>
                                    </Card>
                                </Col>

                                <Col>
                                    <Card className='top-rank'>
                                        <p>We aim to keep things simple, but there's plenty more to explore,including bracket predictions, voting, and themeable brackets for your website.</p>
                                    </Card>
                                </Col>

                                <Col>
                                    <Card className='top-rank'>
                                        <p>We aim to keep things simple, but there's plenty more to explore,including bracket predictions, voting, and themeable brackets for your website.</p>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    <section className='community-section'>
                        <div>
                            <Row>
                                <Col>

                                </Col>

                                <Col>
                                    <h3>Archery Community</h3>
                                    <p>Effortlessly host multiple tournaments, leagues and events for your loyal members.</p>
                                </Col>
                            </Row>
                        </div>
                    </section>

                    <section className='sign-up-free-section'>
                        <div align='center'>
                            <h3><b>Providing the right tools for the gaming community</b></h3>
                            <p>We aim to keep things simple, but there's plenty more to explore,including bracket predictions, voting, and themeable brackets for your website.</p>
                            <Button className='btn-signup-free' color='success'><b>Sign Up Free</b></Button>
                        </div>
                    </section>
                </body>

                <FooterComponent />
            </div>
        )
    }
}

export default FrontPage