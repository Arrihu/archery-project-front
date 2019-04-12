import React from 'react'
import axios from 'axios'
import TournamentForm from './TournamentForm'
import TournamentList from './TournamentList'

class Tournament extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            address: '',
            start_date: '',
            end_date: '',

            tournaments: [],
            mode: 'add',
            showTournamentForm: false
        }
    }

    componentDidMount() {
        this.listAllTournament()
    }

    toggleTournamentForm = () => {
        this.setState({
            showTournamentForm: !this.state.showTournamentForm
        });
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    resetForm =() => {
        this.setState({
            id: '',
            name: '',
            address: '',
            start_date: '',
            end_date: '',
        })
    }

    onCancel = () => {
        this.resetForm()
        this.toggleTournamentForm()
    }

    selectTournament = (tournament) => {
        this.setState({
            id: tournament.id,
            name: tournament.name,
            address: tournament.address,
            start_date: tournament.start_date,
            end_date: tournament.end_date,
            mode: 'update'
        })
        
        this.toggleTournamentForm()
    }

    addTournament = (tournament) => {
        const { tournaments } = this.state
        tournaments.push(tournament)
        this.setState({ tournaments })
    }

    updateTournament = (tournament) => {
        const { tournaments } = this.state
        let index = tournaments.findIndex((data) => data.id === tournament.id)
        tournaments[index] = tournament
        
        this.setState({
            tournaments,
            mode: 'add'
        })
    }

    deleteTournament = (id) => {
        const { tournaments } = this.state
        let temp = tournaments.filter(data => data.id !== id)
        this.setState({ tournaments: temp })
    }

    listAllTournament = () => {
        axios.get('http://localhost:3333/tournament')
            .then((res) => {
                this.setState({
                    tournaments: res.data.data
                })
            })
    }

    onCreateTournament = (event) => {
        event.preventDefault()

        const tournament = {
            id: this.state.id,
            name: this.state.name,
            address: this.state.address,
            start_date: this.state.start_date,
            end_date: this.state.end_date,
        }

        axios.post('http://localhost:3333/tournament/create', tournament)
            .then(res => res.data)
            .then(res => this.addTournament(res.data))
        
        this.resetForm()
        this.toggleTournamentForm()
    }

    onUpdateTournament = (event) => {
        event.preventDefault()

        const tournament = {
            id: this.state.id,
            name: this.state.name,
            address: this.state.address,
            start_date: this.state.start_date,
            end_date: this.state.end_date,
        }

        axios.post('http://localhost:3333/tournament/update', tournament)
            .then(res => res.data)
            .then(res => this.updateTournament(res.data))

        this.resetForm()
        this.toggleTournamentForm()
    }

    onDeleteTournament = (id) => {
        axios.get(`http://localhost:3002/setup/delete/${id}`)
            .then(res => res.data)
            .then(res => this.deleteTournament(id))
    }

    render() {
        return(
            <div>
                {this.state.showTournamentForm &&
                    <TournamentForm 
                        dataState={this.state}
                        toggleTournamentForm={this.toggleTournamentForm}
                        handleChange={this.handleChange}
                        onCreateTournament={this.onCreateTournament}
                        onUpdateTournament={this.onUpdateTournament}
                    />
                }

                {!this.state.showTournamentForm &&
                    <TournamentList 
                        dataState={this.state}
                        toggleTournamentForm={this.toggleTournamentForm}
                        selectTournament={this.selectTournament}
                        onDeleteTournament={this.onDeleteTournament}
                    />
                }
            </div>
        )
    }
}

export default Tournament