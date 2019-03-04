import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class UserForm extends React.Component {

    render() {
        const { nama, email, password, modal, mode } = this.props.dataState

        return(
            <div>
                <Modal isOpen={modal} toggle={this.props.modalToggle}>
                    <ModalHeader toggle={this.props.modalToggle}>User Form</ModalHeader>

                    <ModalBody>
                        <form onSubmit={mode === "update" ? this.props.onUpdateUser : this.props.onCreateUser}>
                            <div class="form-group">
                                <label>Nama</label>
                                <input name="nama" type="text" className="form-control" 
                                value={nama} onChange={this.props.handleChange}></input>
                            </div>

                            <div class="form-group">
                                <label>Email</label>
                                <input name="email" type="email" className="form-control"
                                value={email} onChange={this.props.handleChange}></input>
                            </div>

                            <div class="form-group">
                                <label>Password</label>
                                <input name="password" type="password" className="form-control"
                                value={password} onChange={this.props.handleChange}></input>
                            </div>
                        </form>
                    </ModalBody>

                    <ModalFooter>
                        <Button type="submit" color="success" data-dismiss="modal" 
                        onClick={mode === "update" ? this.props.onUpdateUser : this.props.onCreateUser}
                        >Save</Button>

                        <Button color="secondary" onClick={this.props.modalToggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default UserForm