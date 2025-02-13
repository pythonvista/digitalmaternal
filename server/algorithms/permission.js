import { query } from '~/server/services/mysql';
import { permdata } from '../services/perm';


export const PermissionChecker = (table = '', type = '', perm=[]) => {
    let PERM = perm.find((v) => v.table == table) || {}
    if (type == 'GET') {
        return eval
    }
}

export const UserCrudPermission = async (id) => {
    try {
        const results = await query(`SELECT * FROM PERMISSIONS WHERE id = ?`, [id]);
        if (results.length > 0) {
            return results[0];
        } else {
            throw {status: false, msg: 'No Id Passed Or Insufficent Permission'};
        }
    } catch (err) {
        return {status: err.status, msg: err.msg}
    }
   
}
// async function UserCrudPermission(id){
//     const results = await query(`SELECT * FROM PERMISSIONS WHERE id = ?`, [id]);
//     if (results.length > 0) {
//         return results[0];
//     } else {
//         return {};
//     }
// };
