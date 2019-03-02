import React from 'react'
import { Table, Button } from 'reactstrap'


class EventOrganizerList extends React.Component {
  
  render() {
    const { event_organizers } = this.props.dataState

    return (
        <div>
            <br />
            <div className="row">
                <div className="col-sm-6">
                    <h5>Event Organizer List Data</h5>
                </div>

                <div className="col-sm-6" align="right">
                    <Button color="primary" onClick={this.props.modalToggle}>
                        <i className="cui-cursor" /> Add Event Organizer
                    </Button>
                </div>
            </div>
        
            <br />

            <div className="card">
                <Table>
                    <thead>
                        <tr>
                            <th>No</th>
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
            </div>
        </div>
    )
  }
}

export default EventOrganizerList