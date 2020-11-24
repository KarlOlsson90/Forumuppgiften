class User {
    baseUrl = `https://lab.willandskill.eu`

    getPublicHeaders() {
        return {
            'Content-Type': 'application/json'
        }
    }
    getPrivateHeaders() {
        return {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.findToken()}`
        }
    }
    getCountries() {
        return fetch(`${this.baseUrl}/api/v1/countries/`, {
            headers: this.getPublicHeaders()
        })
            .then(res => res.json())
            .then(data => data.results)
    }
    createUser(body) {
        return fetch(`${this.baseUrl}/api/v1/auth/users/`, {
            method: "POST",
            headers: this.getPublicHeaders(),
            body: JSON.stringify(body)
        }).then((res) => res.json()).then(data => console.log(data))
    }
    loginUser(body) {
        return fetch(`${this.baseUrl}/api/v1/auth/api-token-auth/`, {
            method: "POST",
            headers: this.getPublicHeaders(),
            body: JSON.stringify(body)
        }).then((res) => res.json()).then(data => sessionStorage.setItem('JWT_TOKEN', data.token))
    }
    findToken(){
       return sessionStorage.getItem('JWT_TOKEN')
        
    }
    destroyToken(){
        sessionStorage.removeItem('JWT_TOKEN')
        console.log("Loggade ut")
    }
    getUserData(){
        return fetch(`${this.baseUrl}/api/v1/me/`, {
            headers: this.getPrivateHeaders()
        })
        .then(res => res.json())
        .then(data => data)
    }

}

export default new User();
