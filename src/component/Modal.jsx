import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class Modals extends Component {
    constructor(props) {
        super(props)
        this.state = {
            val: ""
        }
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.Save = this.Save.bind(this);
    }
    onChange(e) {
        this.setState({ val: e.target.value })
    }
    onClick(e) {

    }
    Save(e) {
        this.props.saveEdit(this.state.val);
    }
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <input type="text" defaultValue={this.props.items} onChange={this.onChange} />
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.onHide}>Close</Button>
                    <Button variant="primary" onClick={this.Save} >Save changes</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
export default Modals;