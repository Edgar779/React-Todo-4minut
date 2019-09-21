import React, { Component } from 'react';

class ListItems extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.getInfo = this.getInfo.bind(this);
        this.getInfoEdit = this.getInfoEdit.bind(this);
    }   
    getInfo(e) {
        this.props.delete(this.props);
    }
    getInfoEdit(e) {
        this.props.edit(this.props);
    }
    render() {
        return (
            <>
                <li className="list-group-item">{this.props.item}<i className="fas fa-edit fa-lg" style={{color: "green"}} onClick={this.getInfoEdit}></i><i className="fas fa-trash-alt fa-lg" style={{color: "red"}} onClick={this.getInfo}></i></li>
            </>
        )
    }
}
export default ListItems;