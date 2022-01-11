import React from "react";
import { useFela } from 'react-fela';
import PropTypes from 'prop-types';
import CommentIcon from '../../assets/images/comment.svg';
import Text from '../Text';

export default function CommentItem(props) {
   const { css } = useFela();
  const { body } = props;
  
  return (
    <div className={css({
      display: "flex",
      marginBottom: "20px"
    })}>

      <img src={CommentIcon} alt="comment icon" width="30px"/>
      <Text as='p' styles={{paddingLeft: '20px', marginBottom: '0'}}>
        {body}
      </Text>
    </div>
  )  
};

CommentItem.propTypes = {
  body: PropTypes.string.isRequired
};
