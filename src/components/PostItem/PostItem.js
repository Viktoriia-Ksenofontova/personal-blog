import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useFela } from "react-fela";

const linkRule = () => ({
  display: 'block',
  textDecoration: 'none',
  fontSize: '15px',
  fontWeight: 'bold',
  color: 'black',
  textAlign:'right',
  ':hover': {
    color: 'yellowgreen'
  },
  ':focus': {
    color: 'yellowgreen'
  },
});

export default function PostItem (props) {
  const { id, title, body } = props;
   const { css } = useFela();
  return (
  <>
    <h3>{title}</h3>
      <p className={css({
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        '-webkitLineClamp': '3',
        '-webkitBoxOrient': 'vertical'
      })}>
        {body}
      </p>
      <Link to={`posts/:${id}`} className={css(linkRule)}> Read more</Link>
  </>
  )  
};

PostItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

