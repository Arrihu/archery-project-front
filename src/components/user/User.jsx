import React from 'react'
import axios from 'axios'

import UserForm from './UserForm'
import UserList from './UserList'


class DataStore extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            nama: '',
            email :'', 
            password: '',
            users: [],
            modal: false,
            mode: 'add'
        };
        
        this.toggle = this.toggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.selectUser = this.selectUser.bind(this)
        this.addUser = this.addUser.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.listAllUser = this.listAllUser.bind(this);
        this.onCreateUser = this.onCreateUser.bind(this);
        this.onUpdateUser = this.onUpdateUser.bind(this);
        this.onDeleteUser = this.onDeleteUser.bind(this)
    }

    componentDidMount() {
        this.listAllUser()
    };

    toggle() {
        this.setState({
            modal: !this.state.modal
        })
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
            email: '',
            password: ''
        })
    }

    selectUser(user) {
        this.setState({
            id: user.id,
            nama: user.nama,
            email: user.email,
            password: user.password,
            mode: 'update'
        });
        this.toggle();
    }

    addUser(user) {
        const { users } = this.state;
        users.push(user);
    
        this.setState({
            users
        })
    }
    
    updateUser(user) {
        const { users } = this.state;

        let index = users.findIndex((data) => data.id === user.id);
        users[index] = user;

        this.setState({
            users: users,
            mode: 'add'
        });

        this.toggle();
    }
    
    deleteUser(id) {
        const { users } = this.state;
        let temp = users.filter(data => data.id !== id);

        this.setState({
            users: temp
        });
    }

    listAllUser() {
        const URL = "http://localhost:3002/user";
        
        axios.get(URL)
            .then((result) => {
                this.setState({
                    users: result.data.data
                });
            });
    }

    onCreateUser(event) {
        event.preventDefault();
        const user = {
            id: this.state.id,
            nama: this.state.nama,
            email: this.state.email,
            password: this.state.password
        };
    
        axios.post('http://localhost:3002/user/create', user)
            .then(res => res.data)
            .then(res => this.addUser(res.data));

        this.toggle();
    }
    
    onUpdateUser(event) {
        event.preventDefault();
        const user = {
            id: this.state.id,
            nama: this.state.nama,
            email: this.state.email,
            password: this.state.password
        };

        axios.post(`http://localhost:3002/user/update`, user)
            .then(res => res.data)
            .then(res => this.updateUser(res.data));
    
        this.resetForm()
    }

    onDeleteUser(id) {
        const URL = `http://localhost:3002/user/delete/${id}`

        axios.get(URL)
            .then(res => res.data)
            .then(res => this.deleteUser(id));
    }

    render() {
        return (
            <div>
                <UserForm
                    dataState={this.state}
                    modalToggle={this.toggle}
                    handleChange={this.handleChange}
                    onCreateUser={this.onCreateUser}
                    onUpdateUser={this.onUpdateUser}
                >
                </UserForm>

                <UserList
                    dataState={this.state}
                    selectUser={this.selectUser}
                    onDeleteUser={this.onDeleteUser}
                    modalToggle={this.toggle}
                >
                </UserList>
            </div>
        )
    }
}

export default DataStore;