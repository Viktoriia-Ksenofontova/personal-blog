import React, {useContext} from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useFela } from "react-fela";
import ThemeContext from "../../context/ThemeContext";
import Text from "../Text";
import linkRule from "./PostItem.style";

const postStyle = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  '-webkitLineClamp': '3',
  '-webkitBoxOrient': 'vertical'
}

export default function PostItem (props) {
  const { id, title, body } = props;
  const { theme } = useContext(ThemeContext);
  const { css } = useFela();
  return (
    <>
      <Text as="h3" variant="heading3">
        {title}
      </Text>
      <Text as="p" styles={postStyle}>
        {body}
      </Text>
      
      <Link to={`posts/:${id}`} className={css(linkRule(theme))}>
        Read more
      </Link>
    </>
  )  
};

PostItem.defaultProps = {
  title: "",
  body: ""
};

PostItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  body: PropTypes.string
};

