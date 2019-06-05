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

    toggleCategoryForm = () => {
        this.setState({
            showCategoryForm: !this.state.showCategoryForm
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
            range: '',
            targetId: '',
            tournamentId: '',
            mode: 'add'
        })
    }

    selectCategory = (category) => {
        this.setState({
            id: category.id,
            name: category.name,
            division: category.division,
            range: category.range,
            targetId: category.targetId,
            tournamentId: category.tournamentId,
            mode: 'update'
        })

        this.toggleCategoryForm()
    }

    listAllCategorys = () => {
        const url = 'http://localhost:3333/category'
        
        axios.get(url).then((response) => {
                this.setState({ categorys: response.data.data })
        }, [])
    }

    addCategory = (category) => {
        const { categorys } = this.state
        categorys.push(category)
        this.setState({ categorys })
    }

    onCreateCategory = (event) => {
        event.preventDefault()
        const url = 'http://localhost:3333/category/create'
        const category = {
            id: this.state.id,
            name: this.state.name,
            division: this.state.division,
            range: this.state.range,
            targetId: this.state.targetId,
            tournamentId: this.state.tournamentId
        }
        axios.post(url, category)
            .then(res => res.data)
            .then(res => this.addCategory(res.data))

        this.resetForm()
        this.toggleCategoryForm()
    }

    deleteCategory = (id) => {
        const { categorys } = this.state
        let tmp = categorys.filter(data => data.id !== id)
        this.setState({ categorys: tmp })
    }

    onDeleteCategory = (id) => {
        const url = `http://localhost:3333/category/delete/${id}`
        axios.get(url)
            .then(res => res.data)
            .then(res => this.deleteCategory(id))
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
                        onDeleteCategory={this.onDeleteCategory}
                        selectCategory={this.selectCategory}
                    />
                }
            </div>
        )
    }
}

export default Category