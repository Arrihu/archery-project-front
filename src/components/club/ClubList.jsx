import React from 'react'
import { Button, Table } from 'reactstrap'


class ClubList extends React.Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-6">
                        <h5>Club List Data</h5>
                    </div>

                    <div className="col-sm-6" align="right">
                        <Button color="primary" onClick={this.props.modalToggle}>
                            <i className="cui-cursor" /> Add Club
                        </Button>
                    </div>
                </div>

                <br/>
                <div className="card">
                    <Table>
                        <thead>
                            <tr>
                                <th scope="#">No</th>    
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
                                    <Button color="warning" size="sm">
                                        <i className="cui-note"></i>
                                    </Button>
                                    
                                    <span style={{ paddingLeft: 5 }}></span>

                                    <Button color="danger" size="sm">
                                        <i className="cui-trash"></i>
                                    </Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

export default ClubList