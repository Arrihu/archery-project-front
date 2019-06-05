import React from 'react'
import axios from 'axios'
import { ArcherAPI } from '../../api/ArcherAPI'
import ArcherForm from './ArcherForm'
import ArcherList from './ArcherList'


class Archer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            name: '',
            gender: '',
            age: '',
            clubId: '',
            tournamentId: '',

            archers: [],
            showArcherForm: false,
            mode: 'add'
        }
    }

    componentDidMount() {
        this.getArchers()
    }

    toggleArcherForm = () => {
        this.setState({
            showArcherForm: !this.state.showArcherForm
        })
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    resetForm = () => {
        this.setState({
            id: '',
            name: '',
            gender: '',
            age: '',
            clubId: '',
            tournamentId: ''
        })
    }

    selectArcher = (archer) => {
        this.setState({
            id: archer.id,
            name: archer.name,
            gender: archer.gender,
            age: archer.age,
            clubId: archer.clubId,
            tournamentId: archer.tournamentId,
            mode: 'update'
        })

        this.toggleArcherForm()
    }

    getArchers = async () => {
        const archers = await ArcherAPI.getArchers()
        this.setState({ archers })
    }

    addArcher = (archer) => {
        const { archers } = this.state
        archers.push(archer)
        this.setState({ archers })
    }

    onCreateArcher = e => {
        e.preventDefault()
        const archer = {
            id: this.state.id,
            name: this.state.name,
            gender: this.state.gender,
            age: this.state.age,
            clubId: this.state.clubId,
            tournamentId: this.state.tournamentId
        }

        console.log(archer)
        axios.post('http://localhost:3333/archer/create', archer)
            .then(res => res.data)
            .then(res => this.addArcher(res.data))
            .catch(error => {
                console.log(error)
            })

        this.resetForm()
        this.toggleArcherForm()
    }

    deleteArcher = (id) => {
        const { archers } = this.state
        let tmp = archers.filter(data => data.id !== id)
        this.setState({ archers: tmp })
    }

    onDeleteArcher = (id) => {
        axios.get(`http://localhost:3333/archer/delete/${id}`)
            .then(res => res.data)
            .then(res => this.deleteArcher(id))
    }

    render() {
        return (
            <div>
                {this.state.showArcherForm &&
                    <ArcherForm
                        dataState={this.state}
                        handleChange={this.handleChange}
                        onCreateArcher={this.onCreateArcher}
                    />
                }

                {!this.state.showArcherForm &&
                    <ArcherList 
                        dataState={this.state}
                        toggleArcherForm={this.toggleArcherForm}
                        onDeleteArcher={this.onDeleteArcher}
                        selectArcher={this.selectArcher}
                    />
                }
            </div>
        )
    }
}

export default Archer