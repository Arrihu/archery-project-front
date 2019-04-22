import React from 'react'
import axios from 'axios'

import TargetForm from './TargetForm'
import TargetList from './TargetList'


class Target extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: '',
            name: '',
            size: '',

            targets: [],
            showTargetForm: false,
            mode: 'add'
        }
    }

    componentDidMount() {
        this.listAllTarget()
    }

    toggleTargetForm = () => {
        this.setState({
            showTargetForm: !this.state.showTargetForm
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
            size: ''
        })
    }

    onSelectTarget = (target) => {
        this.setState({
            id: target.id,
            name: target.name,
            size: target.size,
            mode: 'update'
        })

        this.toggleTargetForm()
    }

    onCancel = () => {
        this.resetForm()
        this.toggleTargetForm()
    }

    addTarget = (target) => {
        const { targets } = this.state
        targets.push(target)
        this.setState({targets})
    }

    updateTarget = (target) => {
        const { targets } = this.state
        let index = targets.findIndex((data) => data.id === target.id)
        targets[index] = target
        this.setState({
            targets: targets,
            mode: 'add'
        })
    }

    deleteTarget = (id) => {
        const { targets } = this.state
        let temp = targets.filter(data => data.id !== id)
        this.setState({arrows: temp})
    }

    listAllTarget = () => {
        axios.get('http://localhost:3333/target')
            .then((res) => {
                this.setState({targets: res.data.data})
            })
    }

    onCreateTarget = (event) => {
        event.preventDefault()

        const target = {
            id: this.state.id,
            name: this.state.name,
            size: this.state.size
        }

        axios.post('http://localhost:3333/target/create', target)
            .then(res => res.data)
            .then(res => this.addTarget(res.data))

        this.resetForm()
        this.toggleTargetForm()
    }

    onUpdateTarget = (event) => {
        event.preventDefault()

        const target = {
            id: this.state.id,
            name: this.state.name,
            size: this.state.size
        }

        axios.post('http://localhost:3333/target/update', target)
            .then(res => res.data)
            .then(res => this.updateTarget(res.data))

        this.resetForm()
        this.toggleTargetForm()
    }

    onDeleteTarget = (id) => {
        axios.get(`http://localhost:3333/target/delete/${id}`)
            .then(res => res.data)
            .then(res => this.deleteTarget(id))
    }

    render() {
        return (
            <div>
                {this.state.showTargetForm &&
                <TargetForm 
                    dataState={this.state} 
                    handleChange={this.handleChange}
                    onCreateTarget={this.onCreateTarget}
                    onUpdateTarget={this.onUpdateTarget}
                    onCancel={this.onCancel}
                />
                }

                {!this.state.showTargetForm &&
                <TargetList 
                    dataState={this.state}
                    toggleTargetForm={this.toggleTargetForm}
                    onSelectTarget={this.onSelectTarget}
                    onDeleteTarget={this.onDeleteTarget}
                />
                }
            </div>
        )
    }
}

export default Target