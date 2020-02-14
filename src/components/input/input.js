import React, { Component } from 'react';
import { connect } from 'react-redux';
import './input.css';

import { addItemDraftArr, addItemSavetArr } from '../../actions/action';

class Input extends Component {

  state = {
		title: ''
  }

  sendDraft = (item) => {
    if(item === ''){
      return null
    } else{
      this.props.addItemDraftArrAction(item)
      this.setState({
        title: ''
      })
    }
  }

  sendSave = (item) => {
    if(item === ''){
      return null
    } else{
      this.props.addItemSavetArrAction(item)
      this.setState({
        title: ''
      })
    }
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
        <div className="input">
            <div className="input-wrap">
                <input className="input-group-text" 
                       type="text"
                       onChange={this.handleChange}
                       value={this.state.title}
                />
                <div className="btn btn-sm btn-secondary" 
                      onClick={this.sendDraft.bind(null, this.state.title)}>Draft</div>
                <div className="btn btn-sm btn-success"
                      onClick={this.sendSave.bind(null, this.state.title)}>Save</div>
            </div>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    addItemDraftArrAction: (item) => dispatch(addItemDraftArr(item)),
    addItemSavetArrAction: (item) => dispatch(addItemSavetArr(item))
  }
}

export default connect(null, mapDispatchToProps)(Input);
