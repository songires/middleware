import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import AutocompleteTest from './AutocompleteTest.js';

const SearchCards = () => (
  <Card style={}>
    
    
    <CardTitle
      title="Search service"
      subtitle="Select the date and location"
    />
    <CardText><AutocompleteTest /></CardText>
   
  </Card>
);

return <SearchCards />;
