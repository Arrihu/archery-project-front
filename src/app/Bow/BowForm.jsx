import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'


class BowForm extends React.Component {

    render() {
        const { modal } = this.props.dataState

        return (
            <div>
                <Modal isOpen={modal} toggle={this.props.dataToggle}>
                    <ModalHeader toggle={this.props.dataToggle}>Bow Data</ModalHeader>

                    <ModalBody>
                        <form action="">
                            <div className="form-group">
                                <label htmlFor="bowType">Bow Type</label>
                                <input type="text" className="form-control" placeholder="Bow type" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="drawLength">Draw Length</label>
                                <input type="text" className="form-control" placeholder="Draw length" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="drawWeight">Draw Weight</label>
                                <input type="text" className="form-control" placeholder="Draw weight" />
                            </div>
                        </form>
                    </ModalBody>

                    <ModalFooter>
                        <Button color="primary">Save</Button>
                        <Button color="secondary" onClick={this.props.dataToggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default BowForm