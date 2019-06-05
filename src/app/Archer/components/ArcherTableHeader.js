import React from 'react'
import { Row, Col, CardTitle, Button } from 'reactstrap'

import './archer_table_header.scss'


class ArcherTableHeader extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        
                    </Col>
    
                    <Col xs='4'>
                        <div className='btn-add-archer' align='right'>
                            <input type='text' className='form-control' placeholder='Search archer' />
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ArcherTableHeader