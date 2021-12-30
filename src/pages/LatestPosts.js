import React from "react";
import { observer } from "mobx-react-lite";

const LatestPosts = observer(({ store }) => (
    <div>
      <h2>Latest posts</h2>
      <ul>
        {store.allPosts && store.allPosts.map(({ id, title, body }) => (
          <li key={id}>
            <h3>{title}</h3>
            <p>{body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
);
export default LatestPosts;