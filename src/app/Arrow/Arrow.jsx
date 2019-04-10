import React from 'react'

import ArrowForm from './ArrowForm'
import ArrowList from './ArrowList'


class Arrow extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: '',
            arrow: ''
        }
    }

    render() {
        return (
            <div>
                <ArrowForm
                    dataState={this.state}
                    dataToggle={this.toggle}                
                ></ArrowForm>

                <ArrowList
                    dataToggle={this.toggle}
                ></ArrowList>
            </div>
        )
    }
}

export default Arrow