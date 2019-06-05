import React from 'react'
import axios from 'axios'


class ClubSelect extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            clubs: [],
            dropdownList: [],
            dropdownOpen: false,
            selectedOption: null
        }
    }

    componentDidMount() {
        this.clubLists()
    }

    clubLists = () => {
        const { dropdownList } = this.state
        const URL = 'http://localhost:3333/club'

        axios.get(URL).then((response) => {
            let clubObj = response.data.data
            for (let i = 0; i < clubObj.length; i++) {
                dropdownList.push(clubObj[i])
            }

            this.setState({ clubs: dropdownList })
        })
    }

    render() {
        const { clubs } = this.state
        
        return (
            <div>
                <select name={this.props.name} className='form-control' value={this.props.selectedId} onChange={this.props.handleChange}>
                    <option>Pilih Club</option>
                    {
                        clubs.map((club, i) =>
                            <option value={club.id} key={i}>{club.name}</option>
                        )
                    }
                </select>
            </div>
        )
    }
}

export default ClubSelect