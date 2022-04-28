import React, { useState, useEffect } from 'react';
import { useFela } from 'react-fela';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { PostItem, List, Text, Button, Loader, View } from '../../components';

import { fetchPosts } from '../../redux/posts/postsOperations';
import { getAllPosts, getStatus } from '../../redux/posts/postsSelectors';
import { getTheme } from '../../redux/theme/themeSelectors';

import { PostType } from '../../redux/types';
import { postStyle, listStyle } from './LatestPost.style';

const LatestPosts: React.FC = () => {
  const { css } = useFela();
  const dispatch = useAppDispatch();

  const theme = useAppSelector(getTheme);
  const allPosts = useAppSelector(getAllPosts);
  const status = useAppSelector(getStatus);

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
};
export default LatestPosts;
