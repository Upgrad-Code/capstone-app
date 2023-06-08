import React from 'react';
import { Card, Button } from 'react-bootstrap';

export const CountriesCard = ({ country }) => {
  return (
    <div className="col-md-3">
      <Card>
        <Card.Body>
          <Card.Text>{country.name.common}</Card.Text>
          <Button variant="primary">Go</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
