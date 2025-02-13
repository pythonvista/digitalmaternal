function ManipulateList(map) {
    let list = [];
    let keys = [];
    let questm = '';
    let keym = '';
    for (const key in map) {
        let m = `${map[key]}`;
        list.push(m);
        keys.push(key);
    }
    list.forEach((v, index) => {
        if (index == list.length - 1) {
            questm += '?';
        } else {
            questm += '?,';
        }
    });
    keys.forEach((v, index) => {
        if (index == keys.length - 1) {
            keym += `${v}`;
        } else {
            keym += `${v},`;
        }
    });

    return { list: list, q: questm, key: keym };
}


module.exports = { ManipulateList };