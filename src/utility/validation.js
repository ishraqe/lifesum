const validate = (val, rules) => {

    let isValid = true;

    for (let rule in rules) {
        switch (rule) {
            case 'isEmail':
                isValid = isValid && emailValidator(val);
                break;
            case 'minHeight':
                isValid = isValid && heightValidator(val, rules[rule]);
                break;
            case 'lastName':
                isValid = isValid && fullnameValidator(val);
                console.log(fullnameValidator(val));

                break;
            default:
                isValid= true;
        }
    }

    return isValid;
};

const emailValidator = (val) => {
    return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(val);
};

const passwordValidator = (val, minLength) => {
    return val.length >= minLength;
};

const heightValidator = (val) => {
    return val.length <= 2;
};

export default validate;