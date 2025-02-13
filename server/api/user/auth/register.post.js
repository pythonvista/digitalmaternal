import { UserGuard } from "~/server/guards/user";
import { crud, authfunc } from "~/server/services/firebase";
import { authService } from "~/server/models/firebaseAuth";
export default defineEventHandler(async (event) => {
    try {
        const headers = event.node.req.headers
        const body = await readBody(event);
        const data = await crud.getAllDoc('COHORT_USERS')
        const users = data.filter((v) => v.email.toLowerCase() == body.email.toLowerCase())
        if (!body.email) {
            throw { message: 'Email Is Required', status: false }
        }
        if (users.length > 0) {
            throw { message: 'You have already Joined The Wait List', status: false }
        }
        await authfunc.signup(body.email, 'password1')
        await crud.addDocWithoutId('COHORT_USERS', { ...body, batch: 'A', year: '2025' })
        return { status: true, message: 'You Have Joined The Wait List' }

    } catch (err) {
        setResponseStatus(event, 400)
        return { status: false, message: err.message ? err.message : 'Unknown Error Occured' }
    }
});
