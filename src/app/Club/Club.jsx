import React from 'react'
import axios from 'axios'

import ClubForm from './ClubForm'
import ClubList from './ClubList'


class Club extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: '',
            name: '',
            address: '',

            clubs: [],
            mode: 'add',
            showClubForm: false
        }
    }

    componentDidMount() {
        this.listAllClub()
    }

    toggleClubForm = () => {
        this.setState({
            showClubForm: !this.state.showClubForm
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
            name: '',
            address: ''
        })
    }

    onCancel = () => {
        this.resetForm()
        this.toggleClubForm()
    }

    selectClub = (club) => {
        this.setState({
            id: club.id,
            name: club.name,
            address: club.address,
            mode: 'update'
        })

        this.toggleClubForm()
    }

    addClub = (club) => {
        const { clubs } = this.state
        clubs.push(club)
        this.setState({
            clubs
        })

        this.resetForm()
    }

    updateClub = (club) => {
        const { clubs } = this.state
        let index = clubs.findIndex((data) => data.id === club.id)
        clubs[index] = club

        this.setState({
            clubs
        })
    }

    deleteClub = (id) => {
        const { clubs } = this.state
        let temp = clubs.filter(data => data.id !== id)

        this.setState({
            clubs: temp
        })
    }

    listAllClub = () => {
        axios.get('http://localhost:3333/club')
            .then((result) => {
                this.setState({
                    clubs: result.data.data
                })
            })
    }

    onCreateClub = (event) => {
        event.preventDefault()

        const club = {
            id: this.state.id,
            name: this.state.name,
            address: this.state.address
        }

        axios.post('http://localhost:3333/club/create', club)
            .then(res => res.data)
            .then(res => this.addClub(res.data))

        this.resetForm()
        this.toggleClubForm()
    }

    onUpdateClub = (event) => {
        event.preventDefault()

        const club = {
            id: this.state.id,
            name: this.state.name,
            address: this.state.address
        }

        axios.post('http://localhost:3333/club/update', club)
            .then(res => res.data)
            .then(res => this.updateClub(res.data))

        this.resetForm()
        this.toggleClubForm()
    }

    onDeleteClub = (id) => {
        axios.get(`http://localhost:3333/club/delete/${id}`)
            .then(res => res.data)
            .then(res => this.deleteClub(id))
    }

    render() {
        return (
            <div>
                {this.state.showClubForm &&
                    <ClubForm
                        dataState={this.state}
                        toggleClubForm={this.toggleClubForm}
                        handleChange={this.handleChange}
                        onCreateClub={this.onCreateClub}
                        onUpdateClub={this.onUpdateClub}
                        onCancel={this.onCancel}
                    />
                }

                {!this.state.showClubForm &&
                    <ClubList
                        dataState={this.state}
                        toggleClubForm={this.toggleClubForm}
                        selectClub={this.selectClub}
                        onDeleteClub={this.onDeleteClub}
                    />
                }
            </div>
        )
    }
}

export default Club