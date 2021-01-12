import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import { listSkills } from '../actions/skillActions';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Paginate from '../components/Paginate';

const SkillListScreen = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [skillsPerPage] = useState(10);

  //   Get current logged user from state
  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo, userToken } = userLogin;

  //   Get list of products from state
  const skillList = useSelector((state) => state.skillList);
  const { skills, error, loading } = skillList;

  useEffect(() => {
    dispatch(listSkills());
  }, [dispatch]);

  // Get current skills
  const indexOfLastSkill = currentPage * skillsPerPage;
  const indexOfFirstSkill = indexOfLastSkill - skillsPerPage;
  const currentSkills = skills.slice(indexOfFirstSkill, indexOfLastSkill);

  // Change page
  // Catching the pageNumber sent from child component
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h2>Add your skills</h2>
      {error && <Message>{error}</Message>}
      {loading && <Loader />}
      <ListGroup className='mb-3'>
        {currentSkills &&
          currentSkills.map((skill) => (
            <ListGroup.Item key={skill.id} md={3}>
              {skill.skillName}
            </ListGroup.Item>
          ))}
      </ListGroup>
      <Paginate
        skillsPerPage={skillsPerPage}
        totalSkills={skills.length}
        paginate={paginate}
      />
    </div>
  );
};

export default SkillListScreen;
