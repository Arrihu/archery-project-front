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
            userId: '',
            roles: [],
            mode: 'add',
        };
    }

    componentDidMount() {
        this.listAllRole()
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
            userId: ''
        });
    }

    selectRole = (role) => {
        this.setState({
            id: role.id,
            name: role.name,
            userId: role.userId,
            mode: 'update'
        })

        this.toggle()
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

        this.setState({
            roles: roles
        })
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
            userId: this.state.userId
        };

        axios.post(URL, role)
            .then(response => response.data)
            .then(response => this.addRole(response.data))
            .catch(error => {
                console.log(error)
            })

        this.resetForm()
        this.toggle()
    }

    onUpdateRole = (event) => {
        event.preventDefault()
        const URL = "http://localhost:3333/role/update"

        const role = {
            id: this.state.id,
            name: this.state.name,
            userId: this.state.userId
        }

        axios.post(URL, role)
            .then(response => response.data)
            .then(response => this.updateRole(response.data))

        this.resetForm();
        this.toggle();
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
                <RoleForm
                    dataState={this.state}
                    handleChange={this.handleChange}
                    onCreateRole={this.onCreateRole}
                    onUpdateRole={this.onUpdateRole}
                >
                </RoleForm>

                <RoleList
                    dataState={this.state}
                    selectRole={this.selectRole}
                    onDeleteRole={this.onDeleteRole}
                >
                </RoleList>
            </div>
        )
    }
}

export default Role