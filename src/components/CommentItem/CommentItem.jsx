import React from "react";
import { useFela } from 'react-fela';
import PropTypes from 'prop-types';
import {CommentIcon} from '../Image';
import {Text} from '../index';
import { commentItemStyle } from "./CommentItem.style";

export default function CommentItem(props) {
   const { css } = useFela();
  const { body } = props;
  
  return (
    <div className={css(commentItemStyle)}>
      <CommentIcon/>
      <Text as='p' styles={{paddingLeft: '20px', marginBottom: '0'}}>
        {body}
      </Text>
    </div>
  )  
};

CommentItem.propTypes = {
  body: PropTypes.string.isRequired
};
