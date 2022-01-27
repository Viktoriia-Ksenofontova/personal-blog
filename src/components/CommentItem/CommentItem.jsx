import React from "react";
import PropTypes from 'prop-types';
import {CommentIcon} from '../Image';
import {Text, View} from '../index';

export default function CommentItem(props) {
  
  const { body } = props;
  
  return (
    <View variant="content" gap="20px" margin='10px 0 10px'>
      <CommentIcon/>
      <Text as='p' styles={{ flex: '1 calc(100% - 50px)'}}> 
        {body} 
      </Text>
    </View>
    
  )  
};

CommentItem.defaultProps = {
  body:""
}

CommentItem.propTypes = {
  body: PropTypes.string
};
