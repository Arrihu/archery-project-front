import React from 'react'
import { Button, Card, Row, Col } from 'reactstrap'

import './eventorganizer.scss'


class EventOrganizerForm extends React.Component {
  
  render() {
    const { position, description, mode } = this.props.dataState

    return (
      <div>
        <Card className='eo-form-card'>
          {/* title */}
          <h5><b>Event Organizer Form</b></h5>
          
          {/* event organizer form */}
          <form onSubmit={mode === "update" ? this.props.onUpdateEventOrganizer : this.props.onCreateEventOrganizer}>
            <Row>
              <Col>
                <div className="form-group">
                    <label>Position</label>
                    <input name="position" type="text" className="form-control"
                        value={position} onChange={this.props.handleChange} placeholder='Position'>
                    </input>
                </div>
              </Col>

              <Col>
                <div className="form-group">
                    <label>Description</label>
                    <textarea name="description" value={description} onChange={this.props.handleChange} cols="30" rows="3" className='form-control' placeholder='Description'></textarea>
                </div>
              </Col>
            </Row>
          </form>

          {/* action button */}
          <Button color="primary" onClick={mode === "update" ? this.props.onUpdateEventOrganizer 
          : this.props.onCreateEventOrganizer}><b>Save</b></Button>

          <span className='btn-eo-action-space'></span>

          <Button color="secondary" onClick={this.props.onCancel}><b>Cancel</b></Button>
        </Card>
      </div>
    )
  }
}

export default EventOrganizerForm