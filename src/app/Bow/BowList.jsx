import React from 'react'
import { Button, Table } from 'reactstrap'


class BowList extends React.Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-6">
                        <h5>Bow List Data</h5>
                    </div>

                    <div className="col-sm-6" align="right">
                        <Button color="primary" onClick={this.props.dataToggle}>
                            <i className="cui-cursor"></i> Add Bow
                        </Button>
                    </div>
                </div>

                <br/>
                <div className="card">
                    <Table>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Bow Type</th>
                                <th>Bow Length</th>
                                <th>Bow Weight</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Recurve Bow</td>
                                <td>62 Inch</td>
                                <td>32 Lbs</td>
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

export default BowList