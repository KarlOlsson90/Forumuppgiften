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
 

}

export default new Post();
