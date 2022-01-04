import React from "react";
import { useFela } from 'react-fela';
import PropTypes from 'prop-types';
import CommentIcon from '../../assets/images/comment.svg';

export default function CommentItem(props) {
   const { css } = useFela();
  const { body } = props;
  
  return (
    <div className={css({
      display: "flex",
      borderColor: "grey",
      borderBottomStyle: 'solid',
      borderBottomWidth: '1px'
    })}>

      <img src={CommentIcon} alt="comment icon" width="30px"/>
      <p className={css({
        margin: "20px"
      })}>
        {body}
      </p>
    </div>
  )  
};

CommentItem.propTypes = {
  body: PropTypes.string.isRequired
};
