import User from "./User";

class Post {

    baseUrl = `https://lab.willandskill.eu`

    getPostList(){
        return fetch(`${this.baseUrl}/api/v1/forum/posts/`, {
            headers: User.getPrivateHeaders()
        })
        .then(res => res.json())
        .then(data => data.results)
    }
    getCategories(){
        return fetch(`${this.baseUrl}/api/v1/forum/categories/`, {
            headers: User.getPrivateHeaders()
        })
        .then(res => res.json())
        .then(data => data.results)
    }
    getSinglePost(input){
        return fetch(`${this.baseUrl}/api/v1/forum/posts/${input}/`, {
            headers: User.getPrivateHeaders()
        })
        .then(res => res.json())
    }
    getSinglePostReplies(input){
        return fetch(`${this.baseUrl}/api/v1/forum/posts/${input}/replies/`, {
            headers: User.getPrivateHeaders()
        })
        .then(res => res.json())
        .then(data => data.results)
    }
    createPost(input){
        return fetch(`${this.baseUrl}/api/v1/forum/posts/`, {
            method: "POST",
            headers: User.getPrivateHeaders(),
            body: JSON.stringify(input)
        }).then((res) => res.json()).then(data => console.log(data))
    }
    createReply(input){
        return fetch(`${this.baseUrl}/api/v1/forum/posts/`, {
            method: "POST",
            headers: User.getPrivateHeaders(),
            body: JSON.stringify(input)
        }).then((res) => res.json()).then(data => console.log(data))
    }
}

export default new Post();
