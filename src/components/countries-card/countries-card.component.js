import React from 'react';
import { Card, Button } from 'react-bootstrap';

export const CountriesCard = ({ data }) => {
  console.log(data);
  return (
    <div className="col-md-3">
      <Card>
        <Card.Body>
          <Card.Text>{data.name.common}</Card.Text>
          <Button variant="primary">Go</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
