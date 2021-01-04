
export const checkNull = (x) => {
    if (typeof x === 'undefined' || x === null || x === '') {
        return true;
    }
    else {
        return false
    }
}

export const checkLength = (x, minus, max) => {

    if ( x.length < minus || x.length > max) {
        return true;
    }
    else {
        return false
    }
}

export const checkPassword = (password) => {
    let re_pass = new RegExp(/(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&amp;*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/);
    if (!re_pass.test(password) ||
        checkLength(password, 8, 30) ||
        checkNull(password)) {
        return true;
    }
    else { return false }
}
export const checkEquality= (password, password2) => {
   
    if (password !== password2) {
        return true;
    }
    else { return false }
}
export const checkPasswordLogin = (password) => {
   
    if (checkLength(password, 8, 30) ||
        checkNull(password)) {
        return true;
    }
    else { return false }
}

export const checkNumber = (x, minus, max) => {
    if (typeof x.length < minus || x.length > max) return true;
    else return false
}

export const checkEmail = (email) => {

    let re_email = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

    if (!re_email.test(email) ||
        checkLength(email, 5, 100) ||
        checkNull(email)
    ) {
        return true;
    }
    else { return false }
}

export const checkImage = (image) => {
    //check null
    //check size
    //resize
    //return
}
