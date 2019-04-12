import React from 'react'
import { Table, Button, Card, Row, Col } from 'reactstrap'

import './style/eventorganizer.scss'


 class EventOrganizerList extends React.Component {
  
  render() {
    const { event_organizers } = this.props.dataState

    return (
        <div>
            <Card>
                <Row>
                    <Col>
                        <div className="eo-list-title">
                            <h4><b>Event Organizer List Data</b></h4>
                        </div>
                    </Col>

                    <Col>
                        <div className="btn-add-eo" align="right">
                            <Button color="primary" onClick={this.props.toggleEventOrganizerForm}>
                                <i className="cui-cursor" /> <b>Add Event Organizer</b>
                            </Button>
                        </div>
                    </Col>
                </Row>

                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Position</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            typeof(event_organizers) === "object" &&
                            event_organizers.map((eo, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{i+1}</td>
                                        <td>{eo.position}</td>
                                        <td>{eo.description}</td>
                                        <td>
                                            <Button color="warning" size="sm" 
                                                onClick={this.props.selectEventOrganizer.bind(this, eo)}>
                                                <i className="cui-note" size="sm" />
                                            </Button>

                                            <span style={{ paddingLeft: 5 }}></span>

                                            <Button color="danger" size="sm" 
                                                onClick={this.props.onDeleteEventOrganizer.bind(this, eo.id)}>
                                                <i className="cui-trash" size="sm" />
                                            </Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Card>
        </div>
    )
  }
}

export default EventOrganizerList