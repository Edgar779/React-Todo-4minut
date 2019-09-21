import React, { Component } from 'react';
import ListItems from "./ListItems";
import Modals from "./Modal";
import { Button, Form, ListGroup } from 'react-bootstrap';

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            val: "",
            result: [],
            showModal: false
        }
        this.onClick = this.onClick.bind(this);
        this.onChange = this.onChange.bind(this);
        this.delete = this.delete.bind(this);
        this.edit = this.edit.bind(this);
        this.handleHide = this.handleHide.bind(this);
        this.saveEdit = this.saveEdit.bind(this);
    }
    onClick(e) {
        this.setState((state, props) => {
            return state.result.push(state.val);
        })
    }
    onChange(e) {
        this.setState({ val: e.target.value })
    }
    delete(e) {
        const index = this.state.result.indexOf(e.item);
        this.setState((res) => {
            return res.result.splice(index, 1);
        })
    }
    edit(e) {
        this.setState({ showModal: true, val: e.item })
    }
    saveEdit(e) {
        const index = this.state.result.indexOf(this.state.val);
        this.setState((res) => {
            res.showModal = false;
            return res.result[index] = e;
        })
    }
    handleHide(e) {
        this.setState({ showModal: false })
    }
    render() {



        return (

            <div className="Search">
                
                <Modals show={this.state.showModal} onHide={this.handleHide} items={this.state.val} saveEdit={this.saveEdit} />
                <Form.Group>
                    <Form.Control type="text" placeholder="Jon Doe" onChange={this.onChange} />
                </Form.Group>
                <Button variant="success" onClick={this.onClick}>Send</Button>
                <ListGroup >{this.state.result.map((item) => {
                    return <ListItems key={item} item={item} edit={this.edit} delete={this.delete} />
                })}</ListGroup>
            </div>
        )
    }
}
export default Search;