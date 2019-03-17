import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'


class ClubForm extends React.Component {

    render() {

        const { modal } = this.props.dataState

        return (
            <div>
                <Modal isOpen={modal} toggle={this.props.modalToggle}>
                    <ModalHeader toggle={this.props.modalToggle}>Add Data Club</ModalHeader>

                    <ModalBody>
                        <form action="">
                            <div className="form-group">
                                <label htmlFor="clubName">Club</label>
                                <input type="text" className="form-control" placeholder="Club name" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="clubAddress">Address</label>
                                <input type="text" className="form-control" placeholder="Address" />
                            </div>
                        </form>
                    </ModalBody>

                    <ModalFooter>
                        <Button color="primary">Save</Button>
                        <Button color="secondary" onClick={this.props.modalToggle}>Save</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default ClubForm