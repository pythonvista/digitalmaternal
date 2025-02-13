
import { AdminAuth } from "../services/firebaseAdmin"

function Userguard() {
    this.IsAuth = async (auth) => {
        try {
            const res = await AdminAuth.VerifyToken(auth)
            if (res.uid) {
                return { status: true, err: null, id: res.uid, phone: res.phone_number, email: res.email}
            } else {
                throw { status: false, err: 'Userid does not match access oken', message: 'Userid does not match access token', id:null}
            }

        } catch (err) {
            console.log(err)
            return err
        }
    }

}

// && data.id == authid



export const UserGuard = new Userguard()