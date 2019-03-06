import React from 'react'
import axios from 'axios'
import TournamentForm from './TournamentForm'
import TournamentList from './TournamentList'

class Tournament extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            nama: '',
            lokasi: '',
            alamat: '',
            tanggal_mulai: '',
            tanggal_berakhir: '',
            tournaments: [],
            modal: false,
            mode: 'add'
        }

        this.toggle = this.toggle.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.resetForm = this.resetForm.bind(this)
        this.selectData = this.selectData.bind(this)
        this.addTournament = this.addTournament.bind(this)
        this.updateTournament = this.updateTournament.bind(this)
        this.deleteTournament = this.deleteTournament.bind(this)
        this.listAllTournament = this.listAllTournament.bind(this)
        this.onCreateTournament = this.onCreateTournament.bind(this)
        this.onUpdateTournament = this.onUpdateTournament.bind(this)
        this.onDeleteTournament = this.onDeleteTournament.bind(this)
    }

    componentDidMount() {
        this.listAllTournament()
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    resetForm() {
        this.setState({
            id: '',
            nama: '',
            lokasi: '',
            alamat: '',
            tanggal_mulai: '',
            tanggal_berakhir: '',
        })
    }

    selectData(tournament) {
        this.setState({
            id: tournament.id,
            nama: tournament.nama,
            lokasi: tournament.lokasi,
            alamat: tournament.alamat,
            tanggal_mulai: tournament.tanggal_mulai,
            tanggal_berakhir: tournament.tanggal_berakhir,
            mode: 'update'
        })
        
        this.toggle()
    }

    addTournament(tournament) {
        const { tournaments } = this.state

        tournaments.push(tournament)
        this.setState({ tournaments })
    }

    updateTournament(tournament) {
        const { tournaments } = this.state
        let index = tournaments.findIndex((data) => data.id === tournament.id)
        tournaments[index] = tournament
        
        this.setState({
            tournaments,
            mode: 'add'
        })
    }

    deleteTournament(id) {
        const { tournaments } = this.state
        let temp = tournaments.filter(data => data.id !== id)

        this.setState({ tournaments: temp })
    }

    listAllTournament() {
        var URL = "http://localhost:3002/setup"

        axios.get(URL)
            .then((response) => {
                this.setState({
                    tournaments: response.data.data
                })
            })
    }

    onCreateTournament(event) {
        event.preventDefault()
        const URL = "http://localhost:3002/setup/create"

        const tournament = {
            id: this.state.id,
            nama: this.state.nama,
            lokasi: this.state.lokasi,
            alamat: this.state.alamat,
            tanggal_mulai: this.state.tanggal_mulai,
            tanggal_berakhir: this.state.tanggal_berakhir,
        }

        axios.post(URL, tournament)
            .then(response => response.data)
            .then(response => this.addTournament(response.data))
        
        this.resetForm()
        this.toggle()
    }

    onUpdateTournament(event) {
        event.preventDefault()
        const URL = "http://localhost:3002/setup/update"

        const tournament = {
            id: this.state.id,
            nama: this.state.nama,
            lokasi: this.state.lokasi,
            alamat: this.state.alamat,
            tanggal_mulai: this.state.tanggal_mulai,
            tanggal_berakhir: this.state.tanggal_berakhir,
        }

        axios.post(URL, tournament)
            .then(response => response.data)
            .then(response => this.updateTournament(response.data))

        this.resetForm()
        this.toggle()
    }

    onDeleteTournament(id) {
        const URL = `http://localhost:3002/setup/delete/${id}`

        axios.get(URL)
            .then(response => response.data)
            .then(response => this.deleteTournament(id))
    }

    render() {
        return(
            <div>
                <TournamentForm 
                    dataState={this.state}
                    modalToggle={this.toggle}
                    handleChange={this.handleChange}
                    onCreateTournament={this.onCreateTournament}
                    onUpdateTournament={this.onUpdateTournament}
                    >
                </TournamentForm>

                <TournamentList 
                    dataState={this.state}
                    modalToggle={this.toggle}
                    selectTournament={this.selectData}
                    onDeleteTournament={this.onDeleteTournament}
                ></TournamentList>
            </div>
        )
    }
}

export default Tournament