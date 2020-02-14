import React, { Component } from 'react';
import { connect } from 'react-redux';

import './save.css';

import SaveItem from '../save-item/save-item'

class Save extends Component {

  render(){

    const { saveArr} = this.props

    
    const articleSaveItem = saveArr.map( (i, index) => <SaveItem index={index} 
                                                                  id={i.item} 
                                                                  key={index} 
                                                                  counter={i.counter} 
                                                                  /> )

    return (
        <div className="save">
            <div className="save-wrap">
            { saveArr.length === 0 ? <h3>Пусто</h3> : articleSaveItem}  
            </div>  
        </div>
    );
  }
}


const mapStateToProps = (state) => {
    return {
      saveArr: state.reducer.saveArr,
    }
  }
  
  export default connect(mapStateToProps)(Save);
