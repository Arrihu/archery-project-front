import React from 'react'
import { Table, Button, Row, Col, Card, CardTitle } from 'reactstrap'

import './category.scss'


class CategoryList extends React.Component {

    render() {
        const { categorys } = this.props.dataState

        return (
            <div>
                <Card>
                    <Row>
                        <Col>
                            <div className='category-list-title'>
                                <CardTitle className='mb-0'><h3><b>Categiry lists</b></h3></CardTitle>
                                <div className='small text-muted'>List of all categorys data</div>

                                <br/>
                                <Button color='primary' onClick={this.props.toggleCategoryForm}>
                                    <i className='cui-check-circle'></i> <b>Add Category</b>
                                </Button>
                            </div>

                            
                        </Col>

                        <Col xs='4'>
                            <div className='search-category' align='right'>
                                <input type="text" className="form-control" placeholder='Search category' id=""/>
                            </div>
                        </Col>
                    </Row>

                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Division</th>
                                <th>Type</th>
                                <th>Range</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                typeof(categorys) === 'object' &&
                                categorys.map((category, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{i+1}</td>
                                            <td>{category.name}</td>
                                            <td>{category.division}</td>
                                            <td>{category.type}</td>
                                            <td>{category.range}</td>
                                            <td>
                                                <Button color='success' size='sm'>
                                                    <i className='cui-magnifying-glass'></i>
                                                </Button>
                                                <span></span>
                                                <Button color='warning' size='sm'>
                                                    <i className='cui-note'></i>
                                                </Button>
                                                <span></span>
                                                <Button color='danger' size='sm'>
                                                    <i className='cui-trash'></i>
                                                </Button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </Card>
            </div>
        )
    }
}

export default CategoryList