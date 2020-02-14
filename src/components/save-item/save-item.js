import React, { Component } from 'react';
import { connect } from 'react-redux';

import { saveToDraft, indicatorPush, indicatorDelete, saveToDraftTrue } from '../../actions/action';

import './save-item.css';

class SaveItem extends Component {


  indicatorSelect = (id, index) => {

    this.props.counter === false ? 
    this.props.indicatorPushAction(id, index) : this.props.indicatorDeleteAction(id, index)
  }

  draftToSaveSelect = (id, index) => {

    this.props.counter === false ? 
    this.props.saveToDraftAction(id, index) : this.props.saveToDraftTrueAction(id, index)
  }

  render(){

    console.log("SAVE-ITEM", this.props.id, this.props.counter)


    const indicatorValue = this.props.counter === false ? "save-indicator-false" : "save-indicator-true"

    return (
      <div className="save-item">
        <div className="save-wrap">
          <span className="save-data">{this.props.id}</span>
          <span className={indicatorValue}></span>
        </div>
        
        <div>
            <div className="btn btn-sm btn-secondary btn-secondary-save"
                 onClick={this.draftToSaveSelect.bind(null, this.props.id, this.props.index)}>Draft</div>
            <div className="btn btn-sm btn-secondary btn-secondary-save"
                  onClick={this.indicatorSelect.bind(null, this.props.id, this.props.index)}>Mark</div>
        </div>
      </div>
    );
  }
}



const mapDispatchToProps = dispatch => {
  return {
    saveToDraftAction: (id, index) => dispatch(saveToDraft(id, index)),
    saveToDraftTrueAction: (id, index) => dispatch(saveToDraftTrue(id, index)),
    indicatorPushAction: (id, index) => dispatch(indicatorPush(id, index)),
    indicatorDeleteAction: (id, index) => dispatch(indicatorDelete(id, index))
  }
}

export default connect(null, mapDispatchToProps)(SaveItem);