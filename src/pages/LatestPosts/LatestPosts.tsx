import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useFela } from 'react-fela';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { PostItem, List, Text, Button, Loader, View } from '../../components';

import { postStyle, listStyle } from './LatestPost.style';
import { useThemeContext } from '../../store/hooks';

import { fetchPosts } from '../../redux/posts/postsOperations';
import { getAllPosts, getStatus } from '../../redux/posts/postsSelectors';

const LatestPosts: React.FC = observer(() => {
  const { css } = useFela();
  const dispatch = useAppDispatch();
  const { theme } = useThemeContext();

  const allPosts = useAppSelector(getAllPosts);
  const status = useAppSelector(getStatus);

  type PostType = {
    id: number;
    title: string;
    body: string;
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [visiblePosts, setVisiblePosts] = useState<PostType[] | []>([]);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  useEffect(() => {
    setVisiblePosts([...allPosts].reverse().slice(0, currentPage * 5));
  }, [allPosts, currentPage]);

  const handleClick = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <View variant="container" padding="20px">
      {status === 'pending' ? (
        <Loader />
      ) : (
        <>
          <Text as="h2" styles={{ textAlign: 'center' }} variant="heading2">
            Latest post
          </Text>
          <List styles={listStyle()}>
            {visiblePosts.map(({ id, title, body }) => (
              <li key={id} className={css(postStyle(theme))}>
                <PostItem id={id} title={title} body={body} />
              </li>
            ))}
          </List>

          {visiblePosts.length > 0 && allPosts.length > visiblePosts.length && (
            <Button type="button" onClick={handleClick} text="Load more" />
          )}
        </>
      )}
    </View>
  );
});
export default LatestPosts;
