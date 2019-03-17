import React from 'react'
import ClubForm from './ClubForm'
import ClubList from './ClubList'


class Club extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            modal: false
        }

        this.toggle = this.toggle.bind(this)
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        })
    }

    render() {
        return (
            <div>
                <ClubForm
                    dataState={this.state}
                    modalToggle={this.toggle}
                >
                </ClubForm>
                <ClubList
                    modalToggle={this.toggle}
                >
                </ClubList>
            </div>
        )
    }
}

export default Club