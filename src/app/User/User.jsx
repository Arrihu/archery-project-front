import React from 'react'
import axios from 'axios'

import UserForm from './UserForm'
import UserList from './UserList'


class User extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            email :'', 
            username: '',
            password: '',

            users: [],
            mode: 'add',
            showUserForm: false
        };
    }

    componentDidMount() {
        this.listAllUser()
    };

    toggleUserForm = () => {
        this.setState({
            showUserForm: !this.state.showUserForm
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
            email: '',
            username: '',
            password: ''
        })
    }

    onCancel = () => {
        this.resetForm()
        this.toggleUserForm()
    }

    selectUser = (user) => {
        this.setState({
            id: user.id,
            name: user.name,
            email: user.email,
            username: user.username,
            password: user.password,
            mode: 'update'
        });

        this.toggleUserForm()
    }

    addUser = (user) => {
        const { users } = this.state;
        users.push(user);
    
        this.setState({
            users
        })
    }
    
    updateUser = (user) => {
        const { users } = this.state;

        let index = users.findIndex((data) => data.id === user.id);
        users[index] = user;

        this.setState({
            users: users,
            mode: 'add'
        });
    }
    
    deleteUser = (id) => {
        const { users } = this.state;
        let temp = users.filter(data => data.id !== id);

        this.setState({
            users: temp
        });
    }

    listAllUser = () => {
        const URL = "http://localhost:3333/user";
        
        axios.get(URL)
            .then((result) => {
                this.setState({
                    users: result.data.data
                });
            });
    }

    onCreateUser = (event) => {
        event.preventDefault();
        
        const user = {
            id: this.state.id,
            name: this.state.name,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        };
    
        axios.post('http://localhost:3333/user/create', user)
            .then(res => res.data)
            .then(res => this.addUser(res.data));

        this.resetForm()
        this.toggleUserForm()
    }
    
    onUpdateUser = (event) => {
        event.preventDefault();
        const user = {
            id: this.state.id,
            name: this.state.name,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        };

        axios.post(`http://localhost:3333/user/update`, user)
            .then(res => res.data)
            .then(res => this.updateUser(res.data));
    
        this.resetForm()
        this.toggleUserForm()
    }

    onDeleteUser = (id) => {
        const URL = `http://localhost:3333/user/delete/${id}`

        axios.get(URL)
            .then(res => res.data)
            .then(res => this.deleteUser(id));
    }

    render() {
        return (
            <div>
                {this.state.showUserForm &&
                    <UserForm
                        dataState={this.state}
                        handleChange={this.handleChange}
                        onCreateUser={this.onCreateUser}
                        onUpdateUser={this.onUpdateUser}
                        toggleUserForm={this.toggleUserForm}
                        onCancel={this.onCancel}
                    />
                }

                {!this.state.showUserForm && 
                    <UserList
                        dataState={this.state}
                        selectUser={this.selectUser}
                        onDeleteUser={this.onDeleteUser}
                        toggleUserForm={this.toggleUserForm}
                    />
                }
            </div>
        )
    }
}

export default User