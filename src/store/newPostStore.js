import { makeObservable, observable, computed, action , toJS} from "mobx";
// import axios from "axios";

// axios.defaults.baseURL = "https://simple-blog-api.crew.red";

export default class PostsStore {
  posts = [];

  activePost={};

  error = null;

  status = "";

  constructor() {
      makeObservable(this, {
      posts: observable,
      activePost: observable,
      error: observable,
      status: observable,
      setPosts: action,
      setActivePost: action,
      setNewStatus:action,
      allPosts: computed,
      postForRender:computed,
      countOfPosts: computed
  })
  }

  setPosts(data) {
    this.posts=data;
  }

  setActivePost(data){
    this.activePost={...data};
  }

  setNewStatus(status){
    this.status=status;
  }

   
  get allPosts() {
    const reversePosts = [...this.posts];
    return reversePosts.reverse();
  };

  get postForRender(){
    return toJS(this.activePost)
  };

  get countOfPosts() {
    return this.posts.length;
  };
}

//   updatePost(postId, data){
//     const index = this.posts.findIndex((post)=>post.id===postId);
//     runInAction(() => {this.posts[index] = data})
// }

  // createNewPost = async (title, body) => {
  //   try {
  //     await axios.post("/posts", { "title": title, "body": body })
  //       .then((res) => {
  //         runInAction(() => {
  //           this.posts.push(res.data);
  //           this.status = "created";
  //           this.error = null;
  //         })
  //       })
  //   } catch (err) {
  //     runInAction(() => {
  //       this.error = err.message;
  //       this.status = "error";
  //     })
  //   }
  // };
 
  

  // deletePost(postId) {
  //   const postIndex = this.posts.findIndex((post) => post.id === postId);
  //   if (postIndex > -1) {
  //     this.posts.splice(postIndex, 1);
  //   }
  // };

  // createNewComments = async (postId, body) => {
  //   try {
  //     await axios.post("/comments", { "postId": postId, "body": body })
  //       .then((res) => {
  //         runInAction(() => {
  //           this.comments.push(res.data);
  //           this.status = "created";
  //           this.error = null;
  //         })
  //       })
  //   } catch (err) {
  //     runInAction(() => {
  //       this.error = err.message;
  //       this.status = "error";
  //     })
  //   }
  // };
  
  

  
  
  // deletePostFromServer = async (postId) => {
  //   try {
  //     await axios.delete(`/posts/${postId}`)
  //       .then(() => {
  //         runInAction(() => {
  //           this.deletePost(postId);
  //           this.status = "success";
  //           this.error = null;
  //         })
  //       })
  //   } catch (err) {
  //     runInAction(() => {
  //       this.error = err.message;
  //       this.status = "error";
  //     })
  //   }
 
  // };
  
  


// const postsStore = new PostsStore();


 


