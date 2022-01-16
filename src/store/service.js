import { runInAction, action, makeObservable } from 'mobx';
import axios from "axios";
import PostsStore from './NewPostStore';

axios.defaults.baseURL = "https://simple-blog-api.crew.red";

class Service extends PostsStore {

    constructor() {
    super();
        makeObservable(this, {
        handleError:action,
        handleSuccess:action,
        fetchPostsAction: action,
        fetchCommentsAction:action,
        createNewComment:action,
      })
    }
    
    handleError(err){
        runInAction(() => {
            this.error = err.message;
            this.status = "error";
        })
    }

    handleSuccess(){
        runInAction(() => {
            this.status = "success";
            this.error = null;
        })
    }

    async fetchPostsAction(){
        this.setNewStatus("pending");

        try { await axios.get("/posts")
            .then(response => {
            this.setPosts(response.data);
            this.handleSuccess()
            })
        } catch (error){
            this.handleError(error);    
        }        
    }

    async fetchCommentsAction(postId){
         this.setNewStatus("pending");
       
        try { await axios.get(`/posts/${postId}?_embed=comments`)
           .then(response=>{
              this.setActivePost(response.data);
              this.handleSuccess();
            })
      } catch (error){
        this.handleError(error); 
      }
    }

    async createNewComment (postId, body) {
        try {
           await axios.post("/comments", { "postId": postId, "body": body })
             .then(({data}) => {
                const newActivePost=({...this.postForRender});
                newActivePost.comments.push(data);
               
                this.setActivePost(newActivePost);
                runInAction(() => {
                    this.status = "created";
                    this.error = null;
                })
             })
        } catch (error) {
            this.handleError(error);
        }
    };


    async createNewPost (title, body) {
        let id;
    try {
      await axios.post("/posts", { "title": title, "body": body })
       .then(({data}) => {
           this.setActivePost(data);
           this.handleSuccess();
           id=data.id;
   })
  } catch (error) {
     this.handleError(error);
   }
   return id;
  };


  async removePost(postId) {
    try {
       await axios.delete(`/posts/${postId}`)
      .then(() => {
       
        const updatedPosts=[ ...this.allPosts ].reverse().filter(post => post.id !== postId);
        this.setPosts(updatedPosts);
        this.handleSuccess();
      })
    } catch (error) {
        this.handleError(error);
   }

  }

}

export default Service;