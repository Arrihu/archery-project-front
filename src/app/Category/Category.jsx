import React from 'react'
import axios from 'axios';

import CategoryForm from './CategoryForm'
import CategoryList from './CategoryList'


class Category extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: '',
            name: '',
            division: '',
            type: '',
            range: '',
            targetId: '',
            tournamentId: '',

            categorys: [],
            showCategoryForm: false,
            mode: 'add'
        }
    }

    componentDidMount() {
        this.listAllCategorys()
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onCancel = () => {
        this.resetForm()
        this.toggleCategoryForm()
    }

    resetForm = () => {
        this.setState({
            id: '',
            name: '',
            division: '',
            type: '',
            range: '',
            mode: 'add'
        })
    }

    toggleCategoryForm = () => {
        this.setState({
            showCategoryForm: !this.state.showCategoryForm
        })
    }

    addCategory = (category) => {
        const { categorys } = this.state
        categorys.push(category)
        this.setState({ categorys })
    }

    listAllCategorys = () => {
        const url = 'http://localhost:3333/category'
        
        axios.get(url)
            .then((response) => {
                this.setState({
                    categorys: response.data.data
                })
        }, [])
    }

    onCreateCategory = (event) => {
        event.preventDefault()
        const url = 'http://localhost:3333/category/create'
        const category = {
            id: this.state.id,
            name: this.state.name,
            division: this.state.division,
            type: this.state.type,
            range: this.state.range
        }
        axios.post(url, category)
            .then(res => res.data)
            .then(res => this.addCategory(res.data))

        this.resetForm()
        this.toggleCategoryForm()
    }

    render() {
        return (
            <div>
                {this.state.showCategoryForm &&
                    <CategoryForm 
                        dataState={this.state}
                        toggleCategoryForm={this.toggleCategoryForm}
                        handleChange={this.handleChange}
                        onCancel={this.onCancel}
                        onCreateCategory={this.onCreateCategory}
                    />
                }

                {!this.state.showCategoryForm &&
                    <CategoryList 
                        dataState={this.state}
                        toggleCategoryForm={this.toggleCategoryForm}
                    />
                }
            </div>
        )
    }
}

export default Category