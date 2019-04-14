import React from 'react'
import { Jumbotron, Container, Button } from 'reactstrap'


class JumbotronComponent extends React.Component {

    render() {
        return (
            <div>
                <Jumbotron>
                    <Container fluid>
                        <div align='center'>
                            <h1 className='display-5'><b>Made Your Archery Tournament Be Easy</b></h1>
                            <h4>This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</h4>
                            <hr/>
                            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                            <br/>
                            <Button color='primary' className='btn-create-tournament'><b>Create Your Tournament</b></Button>
                        </div>
                    </Container>
                </Jumbotron>
            </div>
        )
    }
}

export default JumbotronComponent