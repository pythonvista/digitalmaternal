import { UserGuard } from "~/server/guards/user";
import { authfunc } from "~/server/services/firebase";
export default defineEventHandler(async (event) => {
    try {
        const headers = event.node.req.headers
        const queries = getQuery(event);
        const body = await readBody(event);
        const accessToken = headers.authorization
        const data = await UserGuard.IsAuth(accessToken)
        if (!data.status) {
            throw { message: data?.message, code: 403 }
        } else {
            let email = body.email
            let oldPass = body.oldPassword
            let newPass = body.newPassword
            const authLogin = await authfunc.login(email, oldPass)
            const userAuth = await authfunc.UserState()
            let currentUser = userAuth.currentUser
            const res = await authfunc.changePassword(newPass, currentUser)
            await authfunc.signout()
            return { status: true, msg: 'Password Changed Successfully' }
        }
    } catch (err) {
        setResponseStatus(event, 400)
        return { status: false, message: err.message ? err.message : 'Unknown Error Occured' }
    }
});
