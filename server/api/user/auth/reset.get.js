import { UserGuard } from "~/server/guards/user";
import { crud } from "~/server/services/firebase";
import { authfunc } from "~/server/services/firebase";
import { authService } from "~/server/models/firebaseAuth";
export default defineEventHandler(async (event) => {
    try {
        const queries = getQuery(event);
        await authfunc.reset(queries.email)
        return { status: true, message: 'Reset Email Successfully Sent' }

    } catch (err) {
        setResponseStatus(event, 400)
        return { status: false, message: err.message ? err.message : 'Unknown Error Occured' }
    }
});
