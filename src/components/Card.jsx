import React from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';
import { FaCircle } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';

function Card({ ticket, users }) {
  // Find the user that matches the ticket's userId
  const matchingUser = users.find(user => user.id === ticket.userId);

  return (
    <div className='container'>
      <div className='content-section'>
        <div className='card'>
          <div className='mainSec'>
            <div>
              <p className='cam'>{ticket.id}</p>
              <p className='cam-para'>{ticket.title}</p>
            </div>
            <div>
              {matchingUser ? <p>{matchingUser.name}</p> : <p>Not Found</p>}
            </div>
          </div>
          <div>
            <div className='extra'>
              <FiMoreHorizontal />
            </div>
            <div className='extra'>
              <FaCircle />
              <p className='support'>Feature Request</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
