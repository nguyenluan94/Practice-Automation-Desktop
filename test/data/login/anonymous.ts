export const VALID_NUMBER = {
    phone: '0822016873',
    otp: '000000',
    name: (Math.random() + 1).toString(36).substring(7),
};
export const INVALID_NUMBER = {
    letter: 'abc',
    specialCharacter: '@$%',
    otp: '175206',
};
export const VALID_ANONYMOUS_FIRST_TIME = {
    phone: Math.floor(Math.random() * 10000000000),
};
