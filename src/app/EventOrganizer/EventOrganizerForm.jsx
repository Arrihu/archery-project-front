import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'


class EventOrganizerForm extends React.Component {
  
  render() {
    const { position, description, modal, mode } = this.props.dataState

    return (
      <div>
        <Modal isOpen={modal} toggle={this.props.modalToggle}>
            <ModalHeader toggle={this.props.modalToggle}>Panitia Form</ModalHeader>

            <ModalBody>
                <form onSubmit={mode === "update" 
                    ? this.props.onUpdateEventOrganizer 
                    : this.props.onCreateEventOrganizer}>
                    <div className="form-group">
                        <label>Position</label>
                        <input name="position" type="text" className="form-control"
                            value={position} onChange={this.props.handleChange}>
                        </input>
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <input name="description" type="text" className="form-control"
                            value={description} onChange={this.props.handleChange}>
                        </input>
                    </div>
                </form>
            </ModalBody>

            <ModalFooter>
                <Button color="success" onClick={mode === "update" 
                ? this.props.onUpdateEventOrganizer 
                : this.props.onCreateEventOrganizer}
                >Save</Button>

                <Button color="secondary" 
                onClick={this.props.modalToggle}
                >Cancel</Button>
            </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default EventOrganizerForm