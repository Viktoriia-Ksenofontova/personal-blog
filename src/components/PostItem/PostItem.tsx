import React from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { useFela } from 'react-fela';
import { useAppSelector } from '../../redux/hooks';
import { getTheme } from '../../redux/theme/themeSelectors';
// import { useThemeContext } from '../../context/hooks';
import Text from '../Text';
import { linkRuleStyle, postStyle } from './PostItem.style';

type PostItemProps = {
  id: number;
  title: string;
  body: string;
};

const PostItem: React.FC<PostItemProps> = observer(props => {
  const { id, title, body } = props;
  const { css } = useFela();
  const theme = useAppSelector(getTheme);
  // const { theme } = useThemeContext();

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

// PostItem.defaultProps = {
//   title: '',
//   body: '',
// };

// PostItem.propTypes = {
//   id: PropTypes.number.isRequired,
//   title: PropTypes.string,
//   body: PropTypes.string
// };
