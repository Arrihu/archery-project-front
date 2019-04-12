import React from 'react'
import axios from 'axios';

import BowForm from './BowForm'
import BowList from './BowList'


class Bow extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: '',
            type: '',
            length: '',
            weight: '',

            bows: [],
            mode: 'add',
            showBowForm: false
        }
    }

    componentDidMount() {
        this.listAllBow()
    }

    toggleBowForm = () => {
        this.setState({
            showBowForm: !this.state.showBowForm
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
            type: '',
            length: '',
            weight: ''
        })
    } 

    cancelAction = () => {
        this.resetForm()
        this.toggleBowForm()
    }

    selectBow = (bow) => {
        this.setState({
            id: bow.id,
            type: bow.type,
            length: bow.length,
            weight: bow.weight,
            mode: 'update'
        })

        this.toggleBowForm()
    }

    addBow = (bow) => {
        const { bows } = this.state
        bows.push(bow)
        this.setState({
            bows
        })
    }

    updateBow = (bow) => {
        const { bows } = this.state
        let index = bows.findIndex((data) => data.id === bow.id)
        bows[index] = bow

        this.setState({
            bows: bows,
            mode: 'add'
        })
        
        this.toggleBowForm()
    }

    deleteBow = (id) => {
        const { bows } = this.state
        let temp = bows.filter(data => data.id !== id)
        this.setState({
            bows: temp
        })
    }

    listAllBow = () => {
        axios.get('http://localhost:3333/bow')
            .then((result) => {
                this.setState({
                    bows: result.data.data
                })
            })
    }

    onCreateBow = (event) => {
        event.preventDefault()

        const bow = {
            id: this.state.id,
            type: this.state.type,
            length: this.state.length,
            weight: this.state.weight
        }

        axios.post('http://localhost:3333/bow/create', bow)
            .then(res => res.data)
            .then(res => this.addBow(res.data))
        
        this.resetForm()
        this.toggleBowForm()
    }

    onUpdateBow = (event) => {
        event.preventDefault()

        const bow = {
            id: this.state.id,
            type: this.state.type,
            length: this.state.length,
            weight: this.state.weight
        }

        axios.post('http://localhost:3333/bow/update', bow)
            .then(res => res.data)
            .then(res => this.updateBow(res.data))
        
        this.resetForm()
    }

    onDeleteBow = (id) => {
        axios.get(`http://localhost:3333/bow/delete/${id}`)
            .then(res => res.data)
            .then(res => this.deleteBow(id))
    }

    render() {
        return (
            <div>
                {this.state.showBowForm &&
                    <BowForm 
                        dataState={this.state}
                        handleChange={this.handleChange}
                        toggleBowForm={this.toggleBowForm}
                        onCreateBow={this.onCreateBow}
                        onUpdateBow={this.onUpdateBow}
                        cancelAction={this.cancelAction}
                    />
                }

                {!this.state.showBowForm &&
                    <BowList
                        dataState={this.state}
                        toggleBowForm={this.toggleBowForm}
                        selectBow={this.selectBow}
                        onDeleteBow={this.onDeleteBow}
                    />
                }
            </div>
        )
    }
}

export default Bow