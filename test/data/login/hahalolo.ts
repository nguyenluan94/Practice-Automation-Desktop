export const VALID_NUMBER = {
    phone: '0822016873',
    otp: '000000',
    randomNumber: Math.floor(Math.random() * 1000000000),
    name: (Math.random() + 1).toString(36).substring(7),
    account: '0822016873',
    password: '0822016873Ll',
    otpHahalolo: '175206',
};
export const INVALID_NUMBER = {
    account: '0123456789',
    password: '0123456789',
    letter: 'abc',
    specialCharacter: '@$%',
    falseOtp: '111111',
};
