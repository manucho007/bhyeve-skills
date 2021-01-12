import React from 'react';
import { Pagination } from 'react-bootstrap';

const Paginate = ({ skillsPerPage, totalSkills, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalSkills / skillsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Pagination>
      {pageNumbers.map((number) => (
        <Pagination.Item key={number} onClick={() => paginate(number)}>
          {number}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

export default Paginate;
