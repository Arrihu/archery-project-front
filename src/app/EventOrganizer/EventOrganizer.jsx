import React from 'react'
import axios from 'axios'

import EventOrganizerForm from './EventOrganizerForm'
import EventOrganizerList from './EventOrganizerList'


class EventOrganizer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      id: '',
      position: '',
      description: '',

      event_organizers: [],
      mode: 'add',
      showEventOrganizerForm: false
    }
  }

  componentDidMount() {
    this.listAllEventOrganizer()
  }

  toggleEventOrganizerForm = () => {
    this.setState({
      showEventOrganizerForm: !this.state.showEventOrganizerForm
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  resetForm = () => {
    this.setState({
      id: '',
      position: '',
      description: ''
    })
  }

  onCancel = () => {
    this.resetForm()
    this.toggleEventOrganizerForm()
  }

  selectEventOrganizer = (eo) => {
    this.setState({
      id: eo.id,
      position: eo.position,
      description: eo.description,
      mode: 'update'
    })

    this.toggleEventOrganizerForm()
  }

  addEventOrganizer = (eo) => {
    const { event_organizers } = this.state
    event_organizers.push(eo)
    this.setState({ event_organizers })
  }

  updateEventOrganizer = (eo) => {
    const { event_organizers } = this.state
    let index = event_organizers.findIndex(data => data.id === eo.id)
    event_organizers[index] = eo

    this.setState({
      event_organizers,
      mode: 'add'
    })
  }

  deleteEventOrganizer = (id) => {
    const { event_organizers } = this.state
    let temp = event_organizers.filter(data => data.id !== id)

    this.setState({ event_organizers: temp })
  }

  listAllEventOrganizer = () => {    
    axios.get('http://localhost:3333/event-organizer')
      .then((res) => {
        this.setState({
          event_organizers: res.data.data
        })
      })
  }

  onCreateEventOrganizer = (event) => {
    event.preventDefault()

    const eo = {
      id: this.state.id,
      position: this.state.position,
      description: this.state.description,
    }

    axios.post('http://localhost:3333/event-organizer/create', eo)
      .then(res => res.data)
      .then(res => this.addEventOrganizer(res.data))

    this.resetForm()
    this.toggleEventOrganizerForm()
  }

  onUpdateEventOrganizer = (event) => {
    event.preventDefault()
    
    const eo = {
      id: this.state.id,
      position: this.state.position,
      description: this.state.description,
    }

    axios.post('http://localhost:3333/event-organizer/update', eo)
      .then(res => res.data)
      .then(res => this.updateEventOrganizer(res.data))

    this.resetForm()
    this.toggleEventOrganizerForm()
  }

  onDeleteEventOrganizer = (id) => {
    axios.get(`http://localhost:3333/event-organizer/delete/${id}`)
      .then(res => res.data)
      .then(res => this.deleteEventOrganizer(id))
  }

  render() {
    return (
      <div>
        {this.state.showEventOrganizerForm &&
          <EventOrganizerForm
            dataState={this.state}
            handleChange={this.handleChange}
            toggleEventOrganizerForm={this.toggleEventOrganizerForm}
            onCreateEventOrganizer={this.onCreateEventOrganizer}
            onUpdateEventOrganizer={this.onUpdateEventOrganizer}
            onCancel={this.onCancel}
          />
        }

        {!this.state.showEventOrganizerForm &&
          <EventOrganizerList
            dataState={this.state}
            toggleEventOrganizerForm={this.toggleEventOrganizerForm}
            selectEventOrganizer={this.selectEventOrganizer}
            onDeleteEventOrganizer={this.onDeleteEventOrganizer}
          />
        }      
      </div>
    )
  }
}

export default EventOrganizer