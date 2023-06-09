import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

export const CountriesCard = ({ country }) => {
  return (
    <div className="col-md-3">
      <Card>
        <Card.Body>
          <Card.Text>{country.name.common}</Card.Text>
          <Link to={country.cca3}>
            <Button variant="primary">Go</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};
