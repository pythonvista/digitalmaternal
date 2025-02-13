import axios from 'axios'

let api_key = 'AIzaSyDtSrrsMfQWpeBNdBwnb5a0sSXuBb7qMLQ'
function AuthService() {
    
    this.signUp = async (email, password) => {
        let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${api_key}`
        try {
            const res = await axios.post(url, {
                email: email,
                password: password
            })
            const userData = res.data;
            return {
                status: true, uid: userData.localId,
                idToken: userData.idToken,
                email: email
            }
        } catch (err) {
            console.log(err);
             let error = err.response.data ? err.response.data.error : 'Unknown Error Occured'
            let message = error.message
            console.log(error)
             return { status: false, ...err, message: message }
        }

    }

    this.login = async (email, password) => {
        let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${api_key}`
        try {
            const res = await axios.post(url, {
                
                            email: email,
                password: password,
                returnSecureToken: true
            })
            const userData = res.data;
            return {
                status: true,
                ...userData,
                 accessToken: userData.idToken,
            }
        } catch (err) {
            let error = err.response.data ? err.response.data.error : 'Unknown Error Occured'
            let message = error.message
            return { status: false, ...err, message: message }
        }
    }
}


let authService = new AuthService();
export { authService }