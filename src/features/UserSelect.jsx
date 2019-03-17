import React from 'react';
import axios from 'axios';


class UserSelect extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            dropdownOpen: false,
            dropdownList: [],
            selectedOption: null,
        }

        this.userList = this.userList.bind(this);
    }

    componentDidMount() {
        this.userList()
    }

    userList() {
        const { dropdownList } = this.state
        const URL = "http://localhost:3002/user"

        axios.get(URL).then((response) => {
            let userObj = response.data.data;

            for (let i=0; i < userObj.length; i++) {
                dropdownList.push(userObj[i])
            }

            this.setState({
                users: dropdownList
            })
        })
    }

    render() {
        const { users } = this.state;

        return(
            <div>
                <select name={this.props.name} class="form-control" 
                value={this.props.selectedId} onChange={this.props.handleChange}>
                    <option>Pilih User</option>
                    {
                        users.map((user, i) => {
                            return(
                                <option value={user.id} key={i}>{user.name}</option>
                            )
                        })
                    }
                </select>
            </div>
        )
    }
}

export default UserSelect;