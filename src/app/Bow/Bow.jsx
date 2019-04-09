import React from 'react'

import BowForm from './BowForm'
import BowList from './BowList'


class Bow extends React.Component {

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
                <BowForm 
                    dataState={this.state}
                    dataToggle={this.toggle}
                ></BowForm>

                <BowList
                    dataToggle={this.toggle}
                ></BowList>
            </div>
        )
    }
}

export default Bow