import React from 'react'
import axios from 'axios'

import ArrowForm from './ArrowForm'
import ArrowList from './ArrowList'


class Arrow extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: '',
            type: '',
            length: '',
            diameter: '',
            spine: '',

            arrows: [],
            mode: 'add',
            showArrowForm: false
        }
    }

    componentDidMount() {
        this.listAllArrow()
    }

    toggleArrowForm = () => {
        this.setState({
            showArrowForm: !this.state.showArrowForm
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
            diameter: '',
            spine: ''
        })
    }

    selectArrow = (arrow) => {
        this.setState({
            id: arrow.id,
            type: arrow.type,
            length: arrow.length,
            diameter: arrow.diameter,
            spine: arrow.spine,
            mode: 'update'
        })
        this.toggleArrowForm()
    }    

    listAllArrow = () => {
        axios.get('http://localhost:3333/arrow')
            .then((result) => {
                this.setState({
                    arrows: result.data.data
                })
            })
    }

    addArrow = (arrow) => {
        const { arrows } = this.state
        arrows.push(arrow)
        this.setState({
            arrows
        })
    }

    onCreateArrow = (event) => {
        event.preventDefault()

        const arrow = {
            id: this.state.id,
            type: this.state.type,
            length: this.state.length,
            diameter: this.state.diameter,
            spine: this.state.spine
        }
        axios.post('http://localhost:3333/arrow/create', arrow)
            .then(res => res.data)
            .then(res => this.addArrow(res.data))

        this.resetForm()
        this.toggleArrowForm()
    }

    updateArrow = (arrow) => {
        const { arrows } = this.state
        let index = arrows.findIndex((data) => data.id === arrow.id)
        arrows[index] = arrow
        this.setState({
            arrows: arrows,
            mode: 'add'
        })
        this.toggleArrowForm()
    }

    onUpdateArrow = (event) => {
        event.preventDefault()

        const arrow = {
            id: this.state.id,
            type: this.state.type,
            length: this.state.length,
            diameter: this.state.diameter,
            spine: this.state.spine
        }

        axios.post('http://localhost:3333/arrow/update', arrow)
            .then(res => res.data)
            .then(res => this.updateArrow(res.data))

        this.resetForm()
    }

    deleteArrow = (id) => {
        const { arrows } = this.state
        let temp = arrows.filter(data => data.id !== id)
        this.setState({
            arrows: temp
        })
    }

    onDeleteArrow = (id) => {
        axios.get(`http://localhost:3333/arrow/delete/${id}`)
            .then(res => res.data)
            .then(res => this.deleteArrow(id))
    }

    render() {
        return (
            <div>
                {this.state.showArrowForm &&
                    <ArrowForm
                        dataState={this.state}
                        toggleArrowForm={this.toggleArrowForm}
                        handleChange={this.handleChange}    
                        onCreateArrow={this.onCreateArrow}    
                        onUpdateArrow={this.onUpdateArrow}     
                    />
                }

                {!this.state.showArrowForm &&
                    <ArrowList
                        dataState={this.state}
                        toggleArrowForm={this.toggleArrowForm}
                        onCreateArrow={this.onCreateArrow}
                        selectArrow={this.selectArrow}
                        onDeleteArrow={this.onDeleteArrow}
                    />
                }
            </div>
        )
    }
}

export default Arrow