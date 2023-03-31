const obj = {
    a : 8,
    b : 'blabla',
    c : 'it`s magic',
    d : 1024
};

function prop(a) {
    for (let key in a) {
        if (a.hasOwnProperty(key)) {
            console.log(key, a[key])
        }
    }
}

prop(obj)