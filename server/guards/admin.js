
import { AdminAuth } from "../services/firebaseAdmin"
import { crud } from "../services/firebase"
function adminguard() {
    this.IsAuth = async (auth) => {
        try {
            const res = await AdminAuth.VerifyToken(auth)
            if (res.uid) {
                const adminData = await crud.getSingleDoc('ADMIN', res.uid)
                if (adminData.docid) {
                    return { status: true, err: null, id: res.uid, phone: res.phone_number, email: res.email }
                } else {
                   throw {status: false, err: 'Admin Not Found, Access Denied', message: 'Permission Denied'}
                }
               
            } else {
                throw { status: false, err: 'Userid does not match access oken', message: 'Userid does not match access token', id: null }
            }

        } catch (err) {
            console.log(err)
            return err
        }
    }

}

// && data.id == authid



const AdminGuard = new adminguard()
export { AdminGuard}