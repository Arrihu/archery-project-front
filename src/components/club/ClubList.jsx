import React from 'react'


class ClubList extends React.Component {

    render() {
        return (
            <div>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6" align="left">
                            <h5>List Data Club</h5>
                        </div>

                        <div className="col-sm-6" align="right">
                            <button className="btn btn-primary" 
                                onClick={this.props.modalToggle}>Add Club
                            </button>
                        </div>
                    </div>
                </div>

                <br/>
                <div className="card">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="#">#</th>    
                                <th scope="col">Name</th>    
                                <th scope="col">Address</th>    
                                <th scope="col">Action</th>    
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Arrihu</td>
                                <td>Mataram</td>
                                <td>
                                    <button className="btn btn-warning">Edit</button>
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ClubList