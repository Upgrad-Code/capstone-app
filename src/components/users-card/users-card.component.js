import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import './users-card.component.scss';

export const UsersCard = ({ user }) => {
  return (
    <div className="col-md-3 mb-3">
      <div className="countries-card">
        <Card className="shadow-sm">
          <Card.Img variant="top" src={user.picture} />
          <Card.Body>
            <Card.Text>
              {user.title} {user.firstName} {user.lastName}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

// firstName: 'Bessie';
// id: '60d0fe4f5311236168a109de';
// lastName: 'Burke';
// picture: 'https://randomuser.me/api/portraits/med/women/72.jpg';
// title: 'miss';
