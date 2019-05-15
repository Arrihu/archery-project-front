import React from 'react'
import { Jumbotron, Container } from 'reactstrap'

import './jumbotron.scss'


class JumbotronComponent extends React.Component {

    render() {
        return (
            <div>
                <Jumbotron>
                    <Container fluid>
                        <div align='center'>
                            <br/>
                            <h1 className='display-5'><b>Made Your Archery Tournament Be Easy</b></h1>
                            <h4>This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</h4>
                            <hr/>
                            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                            <br/>
                            <br/>
                            <a style={{textDecoration: 'none'}}className='btn-create-your-tournament' href="http://localhost:3000/#/tournament"><b>Create Your Tournament</b></a>
                        </div>
                    </Container>
                </Jumbotron>
            </div>
        )
    }
}

export default JumbotronComponent