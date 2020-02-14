import React, { Component } from 'react';
import { connect } from 'react-redux';

import { draftToSave, draftRemove, editCard } from '../../actions/action';

import './draft-item.css';

class DraftItem extends Component {

  state = {
    title: this.props.id,
    input: false
  }

  inputSelect = () => {
    this.setState({
      title: this.props.id,
      input: !this.state.input
    })
  }

  editCard = (index) => {
    this.inputSelect()
    this.props.editCardAction(this.state.title, index)

  }


  handleChange = (e) => {
    const value = e.currentTarget.value

    this.setState(state => ({
      ...state,
        title: value,
    }))
    console.log(this.state.title)
  }

  render(){

    return (
      
      <div className="draft-item">
        {!this.state.input && 
          <>
            <p onClick={this.inputSelect}>{this.props.id}</p>       
              <div className="btn btn-sm btn-danger"
                onClick={this.props.draftRemoveAction.bind(null, this.props.index)}>Remove</div>
              <div className="btn btn-sm btn-success"
                onClick={this.props.draftToSaveAction.bind(null, this.props.id, this.props.index)}>Save</div>
          </>
        }

        {this.state.input && 
          <>
            <input className="input-group-text" 
              type="text"
              onChange={this.handleChange}
              value={this.state.title}
            />
              <div className="btn btn-sm btn-success"
                onClick={this.editCard.bind(null, this.props.index)}>Edit card</div>
              <div className="btn btn-sm  btn-danger"
                onClick={this.inputSelect}>Cancel</div>
          </>
        }
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    draftToSaveAction: (id, index) => dispatch(draftToSave(id, index)),
    draftRemoveAction: (index) => dispatch(draftRemove(index)),
    editCardAction: (id, index) => dispatch(editCard(id, index))
  }
}

export default connect(null, mapDispatchToProps)(DraftItem);

