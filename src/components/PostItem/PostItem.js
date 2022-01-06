import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useFela } from "react-fela";
import Text from "../Text/Text";

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

const postStyle = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  '-webkitLineClamp': '3',
  '-webkitBoxOrient': 'vertical'
}

export default function PostItem (props) {
  const { id, title, body } = props;
  const { css } = useFela();
  return (
    <>
      <Text as="h3" variant="heading3">
        {title}
      </Text>
      <Text as="p" styles={postStyle }>
        {body}
      </Text>
      
      <Link to={`posts/:${id}`} className={css(linkRule)}>
        Read more
      </Link>
    </>
  )  
};

PostItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

