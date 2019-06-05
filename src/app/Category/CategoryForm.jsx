import React from 'react'
import { Card, Button, Row, Col, CardTitle } from 'reactstrap'


class CategoryForm extends React.Component {

    render() {
        const { name, division, type, range } = this.props.dataState

        return (
            <div>
                <Card className='category-form-card'>
                    <Row>
                        <Col>
                            <div>
                                <CardTitle className='mb-0'><b>Category form</b></CardTitle>
                                <div className='small text-muted'>Add or edit your category data !</div>
                            </div>
                        </Col>
                    </Row>

                    <br/>
                    <form onSubmit={this.props.onCreateCategory}>
                        <Row>
                            <Col>
                                <div className="form-group">
                                    <label htmlFor="categoryName">Name</label>
                                    <input type="text" name='name' className='form-control' placeholder='Category name' value={name} onChange={this.props.handleChange} />
                                </div>
                            </Col>

                            <Col>
                                <div className="form-group">
                                    <label htmlFor="categoryDivision">Division</label>
                                    <input type="text" name='division' className='form-control' placeholder='Category division' value={division} onChange={this.props.handleChange} />
                                </div>
                            </Col>

                            <Col>
                                <div className="form-group">
                                    <label htmlFor="categoryRange">Range</label>
                                    <input type="text" name='range' className='form-control' placeholder='Category range' value={range} onChange={this.props.handleChange} />
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                            
                            </Col>
                            
                            <Col>
                            
                            </Col>
                        </Row>

                        <Button color='primary' onClick={this.props.onCreateCategory}><b>Save changes</b></Button>
                        <span></span>
                        <Button color='secondary' onClick={this.props.onCancel}><b>Cancel</b></Button>
                    </form>
                </Card>
            </div>
        )
    }
}

export default CategoryForm