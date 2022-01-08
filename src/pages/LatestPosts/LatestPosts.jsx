import React, {useContext} from "react";
import { observer } from "mobx-react-lite";
import { useFela } from 'react-fela';
import { Container, PostItem, List, Text } from "../../components";
import ThemeContext from "../../context/ThemeContext";
import latestPostStyle from './LatestPost.style';

const LatestPosts = observer(({ store }) => {
  const { css } = useFela();
  const { theme } = useContext(ThemeContext);
  
  return (
    <Container>
      <Text as="h2" styles={{ textAlign: 'center'}} variant="heading2">
        Latest post
      </Text>
     
      {store.status === "pending" && <div>Loading...</div>}
      <List styles={{ display: 'flex', flexWrap: 'wrap' }}>
        {store.allPosts && store.allPosts.slice().reverse().map(({ id, title, body }) => (
          <li key={id} className={css(latestPostStyle(theme))}>
            <PostItem id={id} title={title} body={body} />
          </li>  
        ))}
      </List>
    </Container>
  )
});
export default LatestPosts;