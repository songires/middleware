import TimePicker from 'react-toolbox/lib/time_picker';
import React from 'react';

var time = new Date();


class TimePickerTest extends React.Component {
  state = {time}

  handleChange = (time) => {
    this.setState({time});
    alert(this.state.time);
  };

  render () {
    return (
      <TimePicker
        label='Select Time'
        format='ampm'
        onChange={this.handleChange}
        value={this.state.time}
      />
    );
  }
}

export default TimePickerTest;
