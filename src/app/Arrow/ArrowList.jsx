import React from 'react'
import { Table, Button } from 'reactstrap'


class ArrowList extends React.Component {

    render() {
        return (
            <div>
                <div className="card">
                    <Table>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Arrow Type</th>
                                <th>Length</th>
                                <th>Diameter</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Platinum</td>
                                <td>80 Cm</td>
                                <td>5 mm</td>
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

export default ArrowList