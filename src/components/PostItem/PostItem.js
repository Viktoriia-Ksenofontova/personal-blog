import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function PostItem (props) {
  const {id, title, body } = props;
  return (
  <>
    <h3>{title}</h3>
    <p>{body}</p>
    <Link to={`posts/:${id}`}>Read more</Link>
  </>
  )  
};

PostItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

