export const field = {
    fieldValue: '',
    isValidField: true,
    errorField: ""
};

export const CheckImage = /^(https?:)?\/\/[^"'\s]+\.(png|jpe?g|gif)$/i;

const GSTRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9A-Z]{1}Z[0-9A-Z]{1}$/;
const CharacterRegex = /^[a-zA-Z ]+$/;
const CharacterRegexWithoutSpace = /^[a-zA-Z]+$/;
const NumberRegex = /^[0-9]\d*$/;
const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //---new 
// const EmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/; //---old
const AddressRegex = /^(?!\d+$)[a-zA-Z0-9&() ]*$/;

const ReturnValue = (value, regex, name = '') => {
    let val = value?.trim()
    let newField = {
        fieldValue: value,
        isValidField: (val?.length > 0) ? (!!regex ? (regex?.test(val) ? true : false) : true) : false,
        errorField: (val?.length > 0) ? (!!regex ? (regex?.test(val) ? '' : !!name ? `Invalid ${name}` : `Invalid Input`) : '') : !!name ? `${name} is required` : `This field is required`
    }
    // console.log('newField....', newField, val, val?.length);
    return newField
}

export const anythingExceptOnlySpace = (name, val) => {
    return ReturnValue(val)
}

export const GSTValue = (name, val) => {
    return ReturnValue(val, GSTRegex, name)
}

//validation only allow alphabates, required field and apply regex according to field name
export const onlyAlphabets = (name, val) => {
    let regex;
    switch (String(name)?.toLowerCase()) {
        case "promocode name":
            return ReturnValue(val, AddressRegex, name)
        case "email address":
            return ReturnValue(val, EmailRegex, name)
        case "expiry date":
            regex = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
            return ReturnValue(val, regex, name)
        case "address":
            return ReturnValue(val, AddressRegex, name)
        case "postgraduniversity":
            return ReturnValue(val, CharacterRegexWithoutSpace, name)
        default:
            return ReturnValue(val, CharacterRegex, name)
    }
};

//validation only allow number, required field and length of the number
export const onlyNumber = (name = null, val = '') => {
    return ReturnValue(val, NumberRegex, name)
}

//validation only allow number greater than zero
export const onlyNumberGreaterThanzero = (name = null, val = '') => {
    return ReturnValue(val, NumberRegex, name)
}

export const onlyPincode = (val, len = 6, name = null) => {
    if (val.length <= len) {
        return ReturnValue(val, NumberRegex, name)
    }
}

export const onPassword = (val) => {
    if (val.trim().length != 0) {
        /*  if (/^(?=.*\d)(?=.*[a-z])[\w~@#$%^&*+=`|{}:;!.?\"()\[\]-]{8,20}$/.test(val)) { */
        if (/^(?=.*\d)(?=.*[a-z])[\w~@#$%^&*+=`|{}:;!.?\"()\[\]-]{8,20}$/.test(val)) {
            return {
                fieldValue: val,
                isValidField: true,
                errorField: ""
            };
        } else {
            return {
                fieldValue: val,
                isValidField: false,
                // errorField: 'Password must be at least 1 lower case,1 upper case, 1 numeric, special character and length  minimum of 8'
                errorField: 'Password must contain letters and numbers and length  minimum of 8'
            };
        }
    } else {
        return {
            fieldValue: val,
            isValidField: false,
            errorField: 'This Field is required'
        };
    }
}

export const onAllowAllCharacters = (name, val) => {
    return ReturnValue(val)
}

export const AddressValidation = (val) => {
    return ReturnValue(val)
}

export const onlyAlphabetsWithAnd = (name, val) => {
    let regex = /^[a-zA-Z& ]+$/;
    return ReturnValue(val, regex, name)
}

export const onlyAlphabetsWithComa = (name, val) => {
    let regex = /^[a-zA-Z&, ]+$/;
    return ReturnValue(val, regex, name)
}
export const allowAllCharacters = (name, val) => {
    return ReturnValue(val)
}

export const alphabetsWithNotOnlyNumber = (name, val) => {
    let regex = /^(?=.*[0-9])[a-zA-Z0-9]+$/;
    return ReturnValue(val, regex, name)
}

export const MyValidation = (regex, name, val) => {
    return ReturnValue(val, regex, name)
}

export const onlyAlphabetsWithRoundBracketComma = (name, val) => {
    let regex = /^[(),a-zA-Z ]+$/;
    return ReturnValue(val, regex, name)
}
