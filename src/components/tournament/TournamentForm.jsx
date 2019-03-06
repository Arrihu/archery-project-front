import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class TournamentForm extends React.Component {

    render() {
        const { nama, lokasi, alamat, tanggal_mulai, tanggal_berakhir, modal, mode } = this.props.dataState

        return(
            <div>                
                <Modal isOpen={modal} toggle={this.props.modalToggle}>
                    <ModalHeader toggle={this.props.modalToggle}>Tournamnet</ModalHeader>

                    <ModalBody>
                        <form onSubmit={mode === 'update' ? this.props.onUpdateTournament : this.props.onCreateTournament}>
                            <div className="form-group">
                                <label>Nama</label>
                                <input name="nama" type="text" className="form-control"
                                value={nama} onChange={this.props.handleChange}
                                >
                                </input>
                            </div>

                            <div className="form-group">
                                <label>Lokasi</label>
                                <input name="lokasi" type="text" className="form-control"
                                value={lokasi} onChange={this.props.handleChange}
                                >
                                </input>
                            </div>

                            <div className="form-group">
                                <label>Alamat</label>
                                <input name="alamat" type="text" className="form-control"
                                value={alamat} onChange={this.props.handleChange}
                                >
                                </input>
                            </div>

                            <div className="form-group">
                                <label>Tanggal Mulai</label>
                                <input name="tanggal_mulai" type="text" className="form-control"
                                value={tanggal_mulai} onChange={this.props.handleChange}
                                >
                                </input>
                            </div>

                            <div className="form-group">
                                <label>Tanggal Berakhir</label>
                                <input name="tanggal_berakhir" type="text" className="form-control"
                                value={tanggal_berakhir} onChange={this.props.handleChange}
                                >
                                </input>
                            </div>
                        </form>
                    </ModalBody>

                    <ModalFooter>
                        <Button color="success" onClick={mode === 'update' 
                        ? this.props.onUpdateTournament 
                        : this.props.onCreateTournament}>Save</Button>

                        <Button color="secondary" onClick={this.props.modalToggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default TournamentForm