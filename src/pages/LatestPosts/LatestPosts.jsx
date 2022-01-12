import React, {useContext, useState, useEffect} from "react";
import { observer } from "mobx-react-lite";
import { useFela } from 'react-fela';
import { Container, PostItem, List, Text, Button } from "../../components";
import ThemeContext from "../../context/ThemeContext";
import latestPostStyle from './LatestPost.style';
 
const LatestPosts = observer(({ store }) => {
  const {allPosts, status } = store;
  const [currentPage, setCurrentPage] = useState(1);
  const [visiblePosts, setVisiblePosts] = useState([]);

  const { css } = useFela();
  const { theme } = useContext(ThemeContext);
  
  useEffect(() => {
   store.getPostsFromServer();      
  }, [store]);

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