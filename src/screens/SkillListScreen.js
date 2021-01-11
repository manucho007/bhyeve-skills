import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import { listSkills } from '../actions/skillActions';
import Message from '../components/Message';
import Loader from '../components/Loader';

const SkillListScreen = () => {
  const dispatch = useDispatch();

  //   Get current logged user from state
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, userToken } = userLogin;

  //   Get list of products from state
  const skillList = useSelector((state) => state.skillList);
  const { loading, skills, error } = skillList;

  useEffect(() => {
    dispatch(listSkills());
  }, [dispatch]);

  console.log(skills);
  return (
    <div>
      {error && <Message>{error}</Message>}
      {loading && <Loader />}
      <ListGroup>
        {!loading &&
          skills.map((skill) => (
            <ListGroup.Item key={skill.id} md={3}>
              {skill.skillName}
            </ListGroup.Item>
          ))}
      </ListGroup>
    </div>
  );
};

export default SkillListScreen;
