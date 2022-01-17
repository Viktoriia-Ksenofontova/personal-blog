import React, { useState, useEffect} from "react";
import { observer } from "mobx-react-lite";
import { useFela } from 'react-fela';
import { Container, PostItem, List, Text, Button } from "../../components";

import latestPostStyle from './LatestPost.style';
import useStore from "../../store/hooks";

 
const LatestPosts = observer(() => {
  const { css } = useFela();
  const { stateContext } = useStore()
  const {theme, store} = stateContext;
  const {allPosts, status } = store;
  
  const [currentPage, setCurrentPage] = useState(1);
  const [visiblePosts, setVisiblePosts] = useState([]);

  useEffect(() => {
   store.fetchPostsAction();      
  }, [store]);

  // console.log('all', allPosts)
  
  useEffect(() => {
    setVisiblePosts([...allPosts].slice(0, currentPage * 5));
  }, [allPosts, currentPage]);
    
  const handleClick = () => {
    setCurrentPage(currentPage + 1);
  }
  
  return (
    <Container>
      <Text as="h2" styles={{ textAlign: 'center'}} variant="heading2">
        Latest post
      </Text>
     
      {status === "pending" && <div>Loading...</div>}
      <List styles={{ display: 'flex', flexWrap: 'wrap' }}>
        {visiblePosts.map(({id, title, body }) => (
          <li key={id} className={css(latestPostStyle(theme))}>
              <PostItem id={id} title={title} body={body} />
          </li>
        ))}
      </List>
      
      {visiblePosts.length > 0 && allPosts.length>visiblePosts.length && (
         <Button type="button" onClick={handleClick} text="Load more"/> 
      )}
      
    </Container>
  )
});
export default LatestPosts;