import { initializeApp } from 'firebase/app';


import {
    confirmPasswordReset,
    createUserWithEmailAndPassword,
    getAuth,
    sendEmailVerification,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut,
    updateEmail,
    updatePassword,
    verifyPasswordResetCode,
    signInWithPhoneNumber,
} from 'firebase/auth';
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    orderBy,
    getDocs,
    limit,
    onSnapshot,
    query,
    setDoc,
    updateDoc,
    getFirestore,
    where,
    serverTimestamp,
} from 'firebase/firestore';
import {
    getDownloadURL,
    getStorage,
    ref,
    uploadBytes,
    deleteObject,
} from 'firebase/storage';

import dotenv from 'dotenv';
dotenv.config();
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
function AuthFunc() {
    this.signup = (email, password) => {
        let data = createUserWithEmailAndPassword(auth, email, password);
        return data;
    };
    this.Phone = (phone, appVerifier) => {
        const res = signInWithPhoneNumber(auth, phone, appVerifier);
        return res;
    };
    this.login = (email, password) => {
        let data = signInWithEmailAndPassword(auth, email, password);
        return data;
    };
    this.signout = () => {
        let data = signOut(auth);
        return data;
    };
    this.reset = (email) => {
        const res = sendPasswordResetEmail(auth, email);
        return res;
    };

    this.verifyemail = (email) => {
        const res = sendEmailVerification(auth, email);
        return res;
    };

    this.verifycode = (code) => {
        const res = verifyPasswordResetCode(auth, code);
        return res;
    };

    this.confirmreset = (code, newpassword) => {
        const res = confirmPasswordReset(auth, code, newpassword);
        return res;
    };
    this.changeEmail = (email, curruser) => {
        const data = updateEmail(curruser, email);
        return data;
    };
    this.changePassword = (password, curruser) => {
        const data = updatePassword(curruser, password);
        return data;
    };

    this.UserState = () => {
        return auth;
    };
   
}

function CRUD() {
    this.addDocWithId = (dbname, userId, arrayinfo) => {
        let data = setDoc(doc(db, dbname, userId), {
            ...arrayinfo,
            CreatedAt: serverTimestamp(),
        });
        return data;
    };

    this.addDocWithoutId = (dbname, arrayinfo) => {
        let collRef = collection(db, dbname);
        let data = addDoc(collRef, {
            ...arrayinfo,
            CreatedAt: serverTimestamp(),
        });
        return data;
    };

    this.getSingleDoc = async (dbname, user_id) => {
        let res = await getDoc(doc(db, dbname, user_id));
        const data = {...res.data(), docid: res.id};
        return data;
    };

    this.getAllDoc = async (dbname, sort = '', uid = '') => {
        let docs = [];
        if (sort == 'asc') {
            const q = query(collection(db, dbname), orderBy('CreatedAt', 'asc'));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), docid: doc.id });
            });
        }
        if (sort == 'desc') {
            const q = query(collection(db, dbname), orderBy('CreatedAt', 'desc'));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), docid: doc.id });
            });
        }
        if (sort == '') {
            const querySnapshot = await getDocs(collection(db, dbname));
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), docid: doc.id });
            });
        }

        return docs;
    };

    this.getAllQueryDoc = async (dbname, where1, where2, sort = '') => {
        const docs = [];

        if (!sort) {
            let q = query(collection(db, dbname), where(where1, '==', where2));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), docid: doc.id });
            });
            return docs;
        } else {
            let q = query(
                collection(db, dbname),
                where(where1, '==', where2),
                orderBy('CreatedAt', sort)
            );
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), docid: doc.id });
            });
            return docs;
        }
    };

    this.collectionSnapDocs = (dbname, where1, where2, where3, where4) => {
        const q = query(
            collection(db, dbname),
            where(where1, '==', where2),
            where(where3, '==', where4),
            orderBy('CreatedAt', 'asc'),
            limit(100)
        );
        return q;
    };

    this.SnapDoc = (dbname, userId) => {
        return doc(db, dbname, userId);
    };

    this.updateDocument = (dbname, userId, arrayinfo) => {
        const selectedUser = doc(db, dbname, userId);
        return updateDoc(selectedUser, arrayinfo);
    };

    this.queryDoc = (dbname, where1, where2) => {
        const collRef = collection(db, dbname);
        const q = query(collRef, where(where1, '==', where2));
        return q;
    };

    this.removeDoc = (dbname, db_id) => {
        return deleteDoc(doc(db, dbname, db_id));
    };
}

let UploadImg = async (file) => {
    const metadata = {
        contentType: 'application/x-zip-compressed',
    };
    const uploadref = ref(storage, file.name);
    const res = await uploadBytes(uploadref, file);
    console.log(res);
    const url = await getDownloadURL(ref(storage, res.metadata.fullPath));
    let path = res.metadata.fullPath;
    return { url, path };
};

let DeleteImg = async (path) => {
    const desertRef = ref(storage, path);
    await deleteObject(desertRef);
};
const authfunc = new AuthFunc();
let crud = new CRUD();


export {authfunc,crud, UploadImg, DeleteImg}
// module.exports = { authfunc, crud, UploadImg, DeleteImg };