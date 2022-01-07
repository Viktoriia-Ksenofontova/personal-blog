import React from "react";
import { observer } from "mobx-react-lite";
import PostItem from "../components/PostItem";
import List from "../components/List";
import Container from "../components/Container";

const LatestPosts = observer(({ store }) => (
  <Container>
    <h2>Latest posts</h2>
    {store.status==="pending" && <div>Loading...</div>}
    <List>
      {store.allPosts && store.allPosts.slice().reverse().map(({ id, title, body }) => (
        <li key={id}>
          <PostItem id={id} title={title} body={body}/>
        </li>
          
      ))}
    </List>
  </Container>
));
export default LatestPosts;