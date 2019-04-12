import React from 'react'
import { Container, Jumbotron, Button } from 'reactstrap'

import './style/homepage.scss'
import Navbar from '../../components/Navbar/Navbar'


class FrontPage extends React.Component {

    render() {
        return (
            <div>
                <Navbar />

                <Jumbotron fluid>
                    <Container fluid>
                        <div align='center'>
                            <h1 className='display-5'><b>Made Your Archery Torunament Be Easy</b></h1>
                            <h4>This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</h4>
                            <hr/>
                            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                            <br/>
                            <Button color='primary' className='btn-create-tournament'><b>Create Your Tournament</b></Button>
                        </div>
                    </Container>
                </Jumbotron>

                <section>
                    <Container>
                        <h1>Hello World</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam unde voluptate eius maiores aut consectetur sunt culpa earum, quam ad veniam enim provident quia, neque optio doloribus dolores corporis totam?</p>
                    </Container>
                </section>
            </div>
        )
    }
}

export default FrontPage