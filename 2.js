const obj = {
    a : 8,
    b : 'blabla',
    c : 'it`s magic',
    d : 1024
};

const str = 'blabla';

function check(a, b) {
    let count = 0;
    for (let key in a) {
        if (a[key] === b) {
            count++;
        }
    }

    if (count > 0) {
        return true;
    } else {
        return false;
    }
}


console.log(check(obj, str))