import React from 'react';
import 'react-toolbox/lib/commons.scss';           // Import common styles
import PurpleAppBar from './PurpleAppBar.js';      // AppBar with simple overrides
import { Button } from 'react-toolbox/lib/button'; // Bundled component import
import AutocompleteTest from './AutocompleteTest.js';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import DatePickerIn from './DatePicker.js';
import TimePickerTest from './TimePickerTest.js';

const SearchCards = () => (
	<div className="mdl-grid">
   		<div className="mdl-layout-spacer"></div>
   			<div className="mdl-cell mdl-cell--4-col">
 			  <Card raised={true} style={{width: "auto"}}>
        <CardTitle title="Search service"  subtitle="Select the date and location"/>
    <CardText><DatePickerIn /></CardText>
 
  </Card>
  </div>
   		<div className="mdl-layout-spacer"></div>
  </div>
);

const App = () => (
  <div className="landing">
    <PurpleAppBar />
    <section style={{ padding: 20 }}>
    <SearchCards />
      
      
    </section>
  </div>
);

export default App;
