import React from 'react';
import { observer } from 'mobx-react-lite';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useFela } from 'react-fela';

import useStore from '../../store/hooks';
import Text from '../Text';
import { linkRuleStyle, postStyle } from './PostItem.style';

const PostItem = observer(props => {
  const { id, title, body } = props;
  const { css } = useFela();
  const { stateContext } = useStore();
  const { theme } = stateContext;

  return (
    <>
      <Text as="h3" variant="heading3">
        {title}
      </Text>
      <Text as="p" styles={postStyle()}>
        {body}
      </Text>

      <Link to={`posts/:${id}`} className={css(linkRuleStyle(theme))}>
        Read more
      </Link>
    </>
  );
});

export default PostItem;

PostItem.defaultProps = {
  title: '',
  body: '',
};

PostItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  body: PropTypes.string,
};
