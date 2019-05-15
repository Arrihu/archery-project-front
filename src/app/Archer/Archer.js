import React from 'react'
import { ArcherAPI } from '../../api/ArcherAPI'

import ArcherForm from './ArcherForm'
import ArcherList from './ArcherList'
import ArcherTableHeader from '../Archer/components/ArcherTableHeader'


class Archer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            name: '',
            gender: '',
            age: '',
            clubId: '',
            tournamentId: '',

            archers: [],
            showArcherForm: false,
            mode: 'add'
        }
    }

    componentDidMount() {
        this.getArchers()
    }

    toggleArcherForm = () => {
        this.setState({
            showArcherForm: !this.state.showArcherForm
        })
    }

    getArchers = async () => {
        const archers = await ArcherAPI.getArchers()
        this.setState({ archers })
    }

    render() {
        return (
            <div>
                {this.state.showArcherForm &&
                    <ArcherForm
                    
                    />
                }

                {!this.state.showArcherForm &&
                    <ArcherList 
                        dataState={this.state}
                        toggleArcherForm={this.toggleArcherForm}
                        archerTableHeader={ArcherTableHeader}
                    />
                }
            </div>
        )
    }
}

export default Archer