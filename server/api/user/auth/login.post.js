import { UserGuard } from "~/server/guards/user";
import { crud } from "~/server/services/firebase";
import { authService } from "~/server/models/firebaseAuth";
export default defineEventHandler(async (event) => {
    try {
        const headers = event.node.req.headers
        const body = await readBody(event);
        const authRes = await authService.login(body.email, body.password)
        if (!authRes.status) { throw { message: 'Error Creating User', code: 403, ...authRes } }
        const userData = await crud.getSingleDoc('USERS', authRes.localId)
        return { status: true, data: userData, message: 'User Logged In Successfully', ...authRes }
    } catch (err) {
        // console.log(err);
        setResponseStatus(event, 400)
        return { status: false, message: err.message ? err.message : 'Unknown Error Occured' }
    }
});
