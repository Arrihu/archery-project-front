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
      modal: false,
      mode: 'add'
    }

    this.toggle = this.toggle.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.resetForm = this.resetForm.bind(this)
    this.selectEventOrganizer = this.selectEventOrganizer.bind(this)
    this.addEventOrganizer = this.addEventOrganizer.bind(this)
    this.updateEventOrganizer = this.updateEventOrganizer.bind(this)
    this.deleteEventOrganizer = this.deleteEventOrganizer.bind(this)
    this.listAllEventOrganizer = this.listAllEventOrganizer.bind(this)
    this.onCreateEventOrganizer = this.onCreateEventOrganizer.bind(this)
    this.onUpdateEventOrganizer = this.onUpdateEventOrganizer.bind(this)
    this.onDeleteEventOrganizer = this.onDeleteEventOrganizer.bind(this)
  }

  componentDidMount() {
    this.listAllEventOrganizer()
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    })
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  resetForm() {
    this.setState({
      id: '',
      position: '',
      description: ''
    })
  }

  selectEventOrganizer(event_organizer) {
    this.setState({
      id: event_organizer.id,
      position: event_organizer.position,
      description: event_organizer.description,
      mode: 'update'
    })

    this.toggle()
  }

  addEventOrganizer(event_organizer) {
    const { event_organizers } = this.state

    event_organizers.push(event_organizer)
    this.setState({ event_organizers })
  }

  updateEventOrganizer(event_organizer) {
    const { event_organizers } = this.state
    let index = event_organizers.findIndex(data => data.id === event_organizer.id)

    event_organizers[index] = event_organizer
    this.setState({
      event_organizers,
      mode: 'add'
    })
  }

  deleteEventOrganizer(id) {
    const { event_organizers } = this.state
    let temp = event_organizers.filter(data => data.id !== id)

    this.setState({ event_organizers: temp })
  }

  listAllEventOrganizer() {
    const URL = "http://localhost:3002/panitia"
    
    axios.get(URL)
      .then((res) => {
        this.setState({
          event_organizers: res.data.data
        })
      })
  }

  onCreateEventOrganizer(event) {
    event.preventDefault()

    const URL = "http://localhost:3002/panitia/create"
    const event_organizer = {
      id: this.state.id,
      position: this.state.position,
      description: this.state.description,
    }

    axios.post(URL, event_organizer)
      .then(res => res.data)
      .then(res => this.addEventOrganizer(res.data))

    this.resetForm()
    this.toggle()
  }

  onUpdateEventOrganizer(event) {
    event.preventDefault()
    
    const URL = "http://localhost:3002/panitia/update"
    const event_organizer = {
      id: this.state.id,
      position: this.state.position,
      description: this.state.description,
    }

    axios.post(URL, event_organizer)
      .then(res => res.data)
      .then(res => this.updateEventOrganizer(res.data))

    this.resetForm()
    this.toggle()
  }

  onDeleteEventOrganizer(id) {
    const URL = `http://localhost:3002/panitia/delete/${id}`

    axios.get(URL)
      .then(res => res.data)
      .then(res => this.deleteEventOrganizer(id))
  }

  render() {
    return (
      <div>
        <EventOrganizerForm
          dataState={this.state}
          handleChange={this.handleChange}
          modalToggle={this.toggle}
          onCreateEventOrganizer={this.onCreateEventOrganizer}
          onUpdateEventOrganizer={this.onUpdateEventOrganizer}
        >
        </EventOrganizerForm>

        <EventOrganizerList
          dataState={this.state}
          modalToggle={this.toggle}
          selectEventOrganizer={this.selectEventOrganizer}
          onDeleteEventOrganizer={this.onDeleteEventOrganizer}
        >
        </EventOrganizerList>        
      </div>
    )
  }
}

export default EventOrganizer