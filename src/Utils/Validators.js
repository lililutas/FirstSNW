



export const requiredField = (value) => {
    if(value) {
        return undefined;
    }
    else{
        return 'Поле обязательно!';
    }
}

export const maxLengthValidCreator = (maxLength) => (value) => {
    if(value > maxLength) {
        return `Не боллее ${maxLength} символов`;
    }
    else{
        return undefined;
    }

}