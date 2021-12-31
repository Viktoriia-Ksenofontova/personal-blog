import React from "react";
import { observer } from "mobx-react-lite";
import PostItem from "../components/PostItem/PostItem";

const LatestPosts = observer(({ store }) => (
    <div>
      <h2>Latest posts</h2>
      <ul>
        {store.allPosts && store.allPosts.map(({ id, title, body }) => (
          <li key={id}>
            <PostItem title={title} body={body}/>
          </li>
        ))}
      </ul>
    </div>
  )
);
export default LatestPosts;