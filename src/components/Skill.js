import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';

const Skill = ({ skillName }) => {
  const [mySkills, setMySkills] = useState([]);

  return <ListGroup.Item md={3}>{skillName}</ListGroup.Item>;
};

export default Skill;
