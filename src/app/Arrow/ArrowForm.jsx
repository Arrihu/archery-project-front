import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'


class ArrowForm extends React.Component {

    render() {
        const { modal } = this.props.dataState

        return (
            <div>
                <Modal isOpen={modal} toggle={this.props.dataToggle}>
                    <ModalHeader toggle={this.props.dataToggle}>Arrow Data</ModalHeader>

                    <ModalBody>
                        <form action="">
                            <div className="form-group">
                                <label htmlFor="arrowType">Arrow Type</label>
                                <input type="text" className="form-control" placeholder="Arrow type" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="arrowLength">Length</label>
                                <input type="text" className="form-control" placeholder="Length" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="arrowDiameter">Diameter</label>
                                <input type="text" className="form-control" placeholder="Diameter" />
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

export default ArrowForm