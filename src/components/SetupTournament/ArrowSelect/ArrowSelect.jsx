import React from 'react';
import axios from 'axios';


class ArrowSelect extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            arrows: [],
            dropdownOpen: false,
            dropdownList: [],
            selectedOption: null,
        }
    }

    componentDidMount() {
        this.arrowList()
    }

    arrowList = () => {
        const { dropdownList } = this.state
        const URL = "http://localhost:3333/arrow"

        axios.get(URL).then((response) => {
            let arrowObj = response.data.data;

            for (let i=0; i < arrowObj.length; i++) {
                dropdownList.push(arrowObj[i])
            }

            this.setState({
                arrows: dropdownList
            })
        }, [])
    }

    render() {
        const { arrows } = this.state;

        return(
            <div>
                <select name={this.props.name} className="form-control" 
                value={this.props.selectedId} onChange={this.props.handleChange}>
                    <option>Pilih Arrow</option>
                    {
                        arrows.map((arrow, i) => {
                            return(
                                <option value={arrow.id} key={i}>{arrow.type}</option>
                            )
                        })
                    }
                </select>
            </div>
        )
    }
}

export default ArrowSelect;