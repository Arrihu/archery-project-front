import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';

import ListTournament from '../../components/TournamentList/TournamentList'
import './dashboard.scss'


class Dashboard extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
    return (
      <div className="animated fadeIn">
        <Container>
        <br />
        <br />
        <Row>
          <Col>
            <div>
              <h1>Your Tournaments</h1>
            </div>
          </Col>

          <Col>
          <br />
            <div align='right'>
              <a style={{ textDecoration: 'none' }} className='btn-create-a-tournament' href='http://localhost:3000/#/tournament' >Create a tournament</a>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs='8'>
            <ListTournament />
          </Col>

          <Col xs='4'>
          <br />
          <br />
          <br />
          
            <ul>
              <li>satu</li>
              <li>satu</li>
              <li>satu</li>
              <li>satu</li>
              <li>satu</li>
            </ul>
          </Col>
        </Row>
        </Container>
      </div>
    );
  }
}

export default Dashboard;
