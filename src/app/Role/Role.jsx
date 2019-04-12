import React from 'react'
import axios from 'axios'

import RoleForm from './RoleForm'
import RoleList from './RoleList'


class Role extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            description: '',
            userId: '',

            roles: [],
            mode: 'add',
            showRoleForm: false
        };
    }

    componentDidMount() {
        this.listAllRole()
    }

    toggleRoleForm = () => {
        this.setState({
            showRoleForm: !this.state.showRoleForm
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    resetForm = () => {
        this.setState({
            id: '',
            name: '',
            description: '',
            userId: ''
        });
    }

    onCancel = () => {
        this.resetForm()
        this.toggleRoleForm()
    }

    selectRole = (role) => {
        this.setState({
            id: role.id,
            name: role.name,
            description: role.description,
            userId: role.userId,
            mode: 'update'
        })

        this.toggleRoleForm()
    }

    addRole = (role) => {
        const { roles } = this.state;
        roles.push(role);
        this.setState({roles});
    }

    updateRole = (role) => {
        const { roles } = this.state
        let index = roles.findIndex(data => data.id === role.id)
        roles[index] = role
        this.setState({roles: roles})
    }

    deleteRole = (id) => {
        const { roles } = this.state;
        let temp = roles.filter(data => data.id !== id);
        this.setState({ roles: temp });
    }

    listAllRole = () => {
        const URL = "http://localhost:3333/role"

        axios.get(URL)
            .then((response) => {
                this.setState({
                    roles: response.data.data
                });
            });
    }

    onCreateRole = (event) => {
        event.preventDefault();
        const URL = "http://localhost:3333/role/create";

        const role = {
            id: this.state.id,
            name: this.state.name,
            description: this.state.description,
            userId: this.state.userId
        };

        axios.post(URL, role)
            .then(response => response.data)
            .then(response => this.addRole(response.data))
            .catch(error => {
                console.log(error)
            })

        this.resetForm()
        this.toggleRoleForm()
    }

    onUpdateRole = (event) => {
        event.preventDefault()
        const URL = "http://localhost:3333/role/update"

        const role = {
            id: this.state.id,
            name: this.state.name,
            description: this.state.description,
            userId: this.state.userId
        }

        axios.post(URL, role)
            .then(response => response.data)
            .then(response => this.updateRole(response.data))

        this.resetForm();
        this.toggleRoleForm()
    }

    onDeleteRole = (id) => {
        const URL = `http://localhost:3333/role/delete/${id}`

        axios.get(URL)
            .then(res => res.data)
            .then(res => this.deleteRole(id))
    }

    render() {
        return (
            <div>
                {this.state.showRoleForm &&
                    <RoleForm
                        dataState={this.state}
                        toggleRoleForm={this.toggleRoleForm}
                        handleChange={this.handleChange}
                        onCreateRole={this.onCreateRole}
                        onUpdateRole={this.onUpdateRole}
                        onCancel={this.onCancel}
                    />
                }

                {!this.state.showRoleForm &&
                    <RoleList
                        dataState={this.state}
                        toggleRoleForm={this.toggleRoleForm}
                        selectRole={this.selectRole}
                        onDeleteRole={this.onDeleteRole}
                    />
                }
            </div>
        )
    }
}

export default Role