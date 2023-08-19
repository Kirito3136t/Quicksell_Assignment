import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import { apiCall } from './api/apiCall';
import Card from './components/Card';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [activeFilter, setActiveFilter] = useState('priority');

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await apiCall();
        if (data) {
          setTickets(data.tickets);
          setUsers(data.users);
          setFilteredTickets(data.tickets);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const filterTickets = (filterKey) => {
    setActiveFilter(filterKey);
    if (filterKey === 'priority') {
      const sortedTickets = [...tickets].sort((a, b) => a.priority - b.priority);
      setFilteredTickets(sortedTickets);
    } else if (filterKey === 'status') {
      const sortedTickets = [...tickets].sort((a, b) => a.status.localeCompare(b.status));
      setFilteredTickets(sortedTickets);
    }
  };

  // Group filtered tickets by priority or status
  const groupedTickets = {};

  filteredTickets.forEach((ticket) => {
    const groupKey = activeFilter === 'priority' ? ticket.priority : ticket.status;
    if (!groupedTickets[groupKey]) {
      groupedTickets[groupKey] = [];
    }
    groupedTickets[groupKey].push(ticket);
  });

  return (
    <>
      <Header onPriorityClick={() => filterTickets('priority')} onStatusClick={() => filterTickets('status')} />
      <div className="grid-container">
        {Object.keys(groupedTickets).map((groupKey) => (
          <div key={groupKey} className="grid-item">
            <div className="column">
              <h4>{activeFilter === 'priority' ? `Priority ${groupKey}` : groupKey}</h4>
              <div className="cards-container">
                {groupedTickets[groupKey].map((ticket) => (
                  <Card key={ticket.id} ticket={ticket} users={users} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
