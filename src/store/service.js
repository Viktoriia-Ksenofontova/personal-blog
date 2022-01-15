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
              this.setActivePost(response);
              this.handleSuccess();
            })
      } catch (error){
        this.handleError(error); 
      }
    }

    async createNewComment (postId, body) {
        this.setNewStatus("pending");
        try {
           await axios.post("/comments", { "postId": postId, "body": body })
             .then(({data}) => {
              

                const newActivePost=({...this.postForRender.data});
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


}

export default Service;