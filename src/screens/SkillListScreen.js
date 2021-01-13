import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { listSkills } from '../actions/skillActions';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Paginate from '../components/Paginate';
// import Skill from '../components/Skill';
import { addSkills } from '../actions/skillActions';

const SkillListScreen = ({ history }) => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [skillsPerPage] = useState(10);
  const [skillsWarning, setSkillsWarning] = useState(false);
  const [mySkills, setMySkills] = useState([]);

  //   Get current logged user from state
  const userLogin = useSelector((state) => state.userLogin);
  const { userToken, userInfo } = userLogin;

  //   Get list of products from state
  const skillList = useSelector((state) => state.skillList);
  const {
    skills: skillsList,
    error: errorList,
    loading: loadingList,
  } = skillList;
  //   Get list of products from state
  const skillAdd = useSelector((state) => state.skillAdd);
  const {
    error: errorAdd,
    loading: loadingAdd,
    success: successAdd,
  } = skillAdd;

  useEffect(() => {
    if (!userToken) {
      history.push('/login');
    } else {
      dispatch(listSkills());
    }
    if (successAdd) {
      history.push('/profile');
    }
    if (userInfo.profileCompleted) {
      history.push('/profile');
    }
    mySkills.length > 10 ? setSkillsWarning(true) : setSkillsWarning(false);
  }, [history, successAdd, dispatch, userToken, mySkills, userInfo]);

  // Get current skills
  const indexOfLastSkill = currentPage * skillsPerPage;
  const indexOfFirstSkill = indexOfLastSkill - skillsPerPage;
  const currentSkills = skillsList.slice(indexOfFirstSkill, indexOfLastSkill);

  // Change page
  // Catching the pageNumber sent from child component
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const checkedSkill = (skill) => {
    if (!mySkills.includes(skill)) {
      setMySkills((mySkills) => [...mySkills, skill]);
    } else {
      setMySkills((mySkills) => mySkills.filter((item) => item !== skill));
      console.log('SKill already included');
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch action
    dispatch(addSkills(mySkills));
  };
  return (
    <div>
      <h2>Add your skills</h2>
      <h3>Select at least 3, but no more than 10</h3>
      {skillsWarning && (
        <Message>Please don't select more than 10 skills</Message>
      )}
      {errorList && <Message>{errorList}</Message>}
      {loadingList && <Loader />}
      {errorAdd && <Message>{errorAdd}</Message>}
      {loadingAdd && <Loader />}
      <Form onSubmit={submitHandler} className='mb-3'>
        {currentSkills.map((skill) => (
          <Form.Check
            type='checkbox'
            id={skill.skillName}
            key={skill.publicId}
            label={skill.skillName}
            // defaultChecked={(e) =>  checkedSkill(e.target.value)}
            onChange={(e) => checkedSkill(e.target.id)}
          />
        ))}
        <Button type='submit' variant='success' className='mt-3'>
          Add SKills
        </Button>
      </Form>
      <Paginate
        skillsPerPage={skillsPerPage}
        totalSkills={skillsList.length}
        paginate={paginate}
      />
    </div>
  );
};

export default SkillListScreen;
