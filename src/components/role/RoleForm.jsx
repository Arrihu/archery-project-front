import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import UserSelect from '../../features/UserSelect'

class RoleForm extends React.Component {

    render() {
        const { name, userId, modal, mode } = this.props.dataState

        return(
            <div>
                <Modal isOpen={modal} toggle={this.props.modalToggle}>
                    <ModalHeader toggle={this.props.modalToggle}
                    >Role Form</ModalHeader>

                    <ModalBody>
                        <form onSubmit={mode === "update" 
                        ? this.props.onUpdateRole 
                        : this.props.onCreateRole}>
                            <div class="form-group">
                                <label>Name</label>
                                <input name="name" type="text" className="form-control" 
                                    placeholder="Role name" value={name} 
                                    onChange={this.props.handleChange}>
                                </input>
                            </div>

                            <div class="form-group">
                                <UserSelect name="userId"
                                    handleChange={this.props.handleChange}>
                                </UserSelect>
                            </div>
                        </form>
                    </ModalBody>

                    <ModalFooter>
                        <Button color="success"
                        onClick={mode === "update" 
                        ? this.props.onUpdateRole 
                        : this.props.onCreateRole}
                        >Save</Button>

                        <Button color="secondary"
                        onClick={this.props.modalToggle}
                        >cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default RoleForm