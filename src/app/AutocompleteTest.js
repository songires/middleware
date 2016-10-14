import Autocomplete from 'react-toolbox/lib/autocomplete';
import React, { Component } from 'react';
import DatePickerIn from './DatePicker.js';



var locationsArray = {
  'ES-es': 'Spain',
  'TH-th': 'Thailand',
  'EN-gb': 'England',
  'EN-en': 'USA'
};


class AutocompleteTest extends Component {
  state = {
    year: '',
    disabled: ''
    
  }

  handleSimpleChange = (value) => {
    this.setState({year: value});

  };

  

  render () {
    return (
      <div>
      
        <Autocomplete
          direction="down"
          label="Select Location"
          disabled={!this.state.disabled}
          multiple={false}
          onChange={this.handleSimpleChange}
          source={locationsArray}
          value={this.state.year}
        />
      </div>
    );
  }
}

export default AutocompleteTest;
