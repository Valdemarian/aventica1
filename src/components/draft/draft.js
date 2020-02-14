import React, { Component } from 'react';
import { connect } from 'react-redux';
import DraftItem from '../draft-item/draft-item';

import './draft.css';

class Draft extends Component {
  
  render(){

    const { item } = this.props

    const articleDraftItem = item.map( (i, index ) => <DraftItem  id={i.item} index={index} key={index} /> )

    return (
      <div className="container draft">
          <h2>Draft</h2>
          { item.length === 0 ? <h3>Пусто</h3> : articleDraftItem}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    item: state.reducer.draftArr,
  }
}

export default connect(mapStateToProps)(Draft);
