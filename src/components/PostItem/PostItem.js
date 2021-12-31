import React from "react";
import PropTypes from 'prop-types';

export default function PostItem (props) {
  const { title, body } = props;
  return(
  <>
    <h3>{title}</h3>
    <p>{body}</p>
    <button type="button">Read more</button>
  </>
  )  
};

PostItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

