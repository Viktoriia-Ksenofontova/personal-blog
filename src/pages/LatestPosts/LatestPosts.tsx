import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useFela } from 'react-fela';
import { PostItem, List, Text, Button, Loader, View } from '../../components';

import { postStyle, listStyle } from './LatestPost.style';
import { useThemeContext, useStateContext } from '../../store/hooks';

const LatestPosts: React.FC = observer(() => {
  const { css } = useFela();
  const store = useStateContext();
  const { theme } = useThemeContext();
  const { allPosts } = store;

  type PostType = {
    id: number;
    title: string;
    body: string;
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [visiblePosts, setVisiblePosts] = useState<PostType[] | []>([]);

  useEffect(() => {
    store.fetchPostsAction();
  }, [store]);

  // console.log('all', allPosts)

  useEffect(() => {
    setVisiblePosts([...allPosts].slice(0, currentPage * 5));
  }, [allPosts, currentPage]);

  const handleClick = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <View variant="container" padding="20px">
      {store.status === 'pending' ? (
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
