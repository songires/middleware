import DatePicker from 'react-toolbox/lib/date_picker';
import Autocomplete from 'react-toolbox/lib/autocomplete';
import TimePicker from 'react-toolbox/lib/time_picker';
import SubmitButton from './SubmitButton.js'
import theme from './timepicker_fix.scss';
// And then just use global variable.
import React from 'react';


var Loading = require('react-loading');



import 'whatwg-fetch';
// And then just use global variable.
var locationsArray = { };


// if you are on node v0.10, set a Promise library first, eg.
// fetch.Promise = require('bluebird');

// plain text or html


const datetime = new Date();
var time = new Date();
const min_datetime = new Date(1991, 11, 11);

var fct = "";
var icon_prefix = "mdi mdi-weather-";
var icon_url = "";

class DatePickerIn extends React.Component {
  state = {fct1: '',date2: '',date_url: '', locDisabled: '', location: '', timeDisabled: '', time, submitDisabled: '',loading:0, forecast: 0,locArray:{}}

  handleDateChange = (value) => {
    var d = value;
    var _this = this;
    var month = d.getMonth();
    var day = d.getDate();
    if(day<10){
      day = '0'+day.toString()
    }
    if(month<10){
      month = '0'+month.toString()
    }
    var date_format = d.getFullYear()+"/"+month+"/"+day+"/";
    this.setState({date2: d, date_url: date_format,location: '',submitDisabled: '',locDisabled:'', forecast:'',locArray:{}});
    console.log(date_format);
    fetch('/home/submit',{method: "POST",  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
   body: JSON.stringify({date: date_format})

 })
    .then(function(res) {
        return res.text();
    }).then(function(body) {
        locationsArray = {};

      var body1 = JSON.parse(body);
      for (var key in body1) {
        if (body1.hasOwnProperty(key)) {

          locationsArray[key]=body1[key][3];
        }
      }
    _this.setState({locDisabled:"false",locArray:locationsArray});  
    });
    
    

  }

  handleTimeChange = (time) => {
    this.setState({time});
    console.log(this.state.time);
  }

  handleSubmit = () => {
     this.setState({loading:1});
     var _this = this;
     var location = this.state.date_url+this.state.location+"/";
     var timestamp = [this.state.time.getHours(), this.state.time.getSeconds(), this.state.time.getMinutes()];
     var time1 = '';
      for (var item in timestamp){
        if (item < 10){
          time1+=("0"+String(item));
        }
        else{
          time1+=(String(item));
        }
      }

    fetch('/home/submit_loc',{method: "POST",  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
   body: JSON.stringify({loc:location , timest:time1})

 })
    .then(function(res) {
        return res.text();

    }).then(function(body) {
        console.log(body);
        var body1 = JSON.parse(body);
        icon_url = icon_prefix+body1['forecast'];
        fct = body1['forecast'];
        console.log(icon_url);
        _this.setState({loading:0,forecast:icon_url,fct1:fct});

    });
    
    console.log(this.state.fct1+"FDS");
    console.log(fct);
  }




  handleLocationChange = (value) => {
     this.setState({location: value,submitDisabled:"false"});
  };

  render () {
    return (
      <section >

        <DatePicker 
          label='Select a Date' 
          sundayFirstDayOfWeek 
          minDate={min_datetime} 
          maxDate={datetime} 
          onChange={this.handleDateChange} 
          value={this.state.date2} 
        />
        <TimePicker
          theme={theme}
          label='Select Time'
          format='ampm'
          hint="optional"
          disabled={!this.state.locDisabled}
          onChange={this.handleTimeChange}
          value={this.state.time}
        />
        
       <Autocomplete
                  direction="down"
                  label="Select Location"
                  disabled={!this.state.locDisabled}
                  multiple={false}
                  onChange={this.handleLocationChange}
                  source={this.state.locArray}
                  value={this.state.location}
                />
        <SubmitButton
          accent
          raised
          primary
          disabled = {!this.state.submitDisabled}
          label = "Submit" 
          onClick={this.handleSubmit}
        />

        {this.state.loading  ? <Loading type='cylon' color='#00796B' /> : null }
        {this.state.forecast ? <div><h1><i className={this.state.forecast}></i> </h1> <h3>{fct}</h3></div>: null }
      </section>
      );
  }
}

export default DatePickerIn;