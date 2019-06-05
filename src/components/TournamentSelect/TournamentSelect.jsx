import React from 'react'
import axios from 'axios';


class TournamentSelect extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            tournaments: [],
            dropdownList: [],
            dropdownOpen: false,
            selectedOption: null
        }
    }

    componentDidMount() {
        this.tournamentLists()
    }

    tournamentLists = () => {
        const { dropdownList } = this.state
        const URL = 'http://localhost:3333/tournament'
        
        axios.get(URL).then((response) => {
            let tournamentObj = response.data.data
            for (let i = 0; i < tournamentObj.length; i++) {
                dropdownList.push(tournamentObj[i])
            }

            this.setState({ tournaments: dropdownList })
        })
    }

    render() {
        const { tournaments } = this.state

        return (
            <div>
                <select className='form-control' name={this.props.name} onChange={this.props.handleChange}>
                    <option>Pilih Tournament</option>
                    {
                        tournaments.map((tournament, i) => 
                            <option value={tournament.id} key={i}>{tournament.name}</option>
                        )
                    }
                </select>
            </div>
        )
    }
}

export default TournamentSelect