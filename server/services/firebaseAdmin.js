
// import { initializeApp } from 'firebase-admin/app';
import admin from 'firebase-admin';
import privateKey from './cred.json';

admin.initializeApp({
    credential: admin.credential.cert(privateKey)
})

function ADMIN() {
    this.VerifyToken = (token) => {
        const decodedToken = admin.auth().verifyIdToken(token);
        return decodedToken;
    }
    // this.ClearSession = async (uid) => {
    //     const res = await admin.auth().revokeRefreshTokens(uid)
    //     return  res 
    // }
}



const AdminAuth = new ADMIN()

export { AdminAuth }