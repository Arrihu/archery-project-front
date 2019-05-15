import React from 'react';
import axios from 'axios';


class BowSelect extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bows: [],
            dropdownOpen: false,
            dropdownList: [],
            selectedOption: null,
        }
    }

    componentDidMount() {
        this.bowList()
    }

    bowList = () => {
        const { dropdownList } = this.state
        const URL = "http://localhost:3333/bow"

        axios.get(URL).then((response) => {
            let bowObj = response.data.data;

            for (let i=0; i < bowObj.length; i++) {
                dropdownList.push(bowObj[i])
            }

            this.setState({
                bows: dropdownList
            })
        }, [])
    }

    render() {
        const { bows } = this.state;

        return(
            <div>
                <select name={this.props.name} className="form-control" 
                value={this.props.selectedId} onChange={this.props.handleChange}>
                    <option>Pilih Busur</option>
                    {
                        bows.map((bow, i) => {
                            return(
                                <option value={bow.id} key={i}>{bow.type}</option>
                            )
                        })
                    }
                </select>
            </div>
        )
    }
}

export default BowSelect;