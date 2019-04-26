import React from 'react'
import { Table, Button, Card } from 'reactstrap'

import EventOrganizerListHeader from './components/EventOrganizerListHeader'
import Pagination from '../../components/Pagination/Pagination'
import './scss/eventorganizer.scss'


 class EventOrganizerList extends React.Component {
  
  render() {
    const { event_organizers } = this.props.dataState

    return (
        <div>
            <Card>
                <EventOrganizerListHeader />

                <Table hover>
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
                                            <Button color='success' size='sm'>
                                                <i className='cui-magnifying-glass'></i>
                                            </Button>
                                            <span></span>
                                            <Button color="warning" size="sm" 
                                                onClick={this.props.selectEventOrganizer.bind(this, eo)}>
                                                <i className="cui-note" size="sm" />
                                            </Button>
                                            <span></span>
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

                <br />
                <br />
                <Pagination />
            </Card>
        </div>
    )
  }
}

export default EventOrganizerList