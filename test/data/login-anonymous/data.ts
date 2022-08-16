export const VALID_NUMBER = {
    phone: '0822016873',
    otp: '000000',
    randomNumber: Math.floor(Math.random() * 1000000000),
    name: (Math.random() + 1).toString(36).substring(7),
};
export const INVALID_NUMBER = {
    letter: 'abc',
    specialCharacter: '@$%',
    falseOtp: '175206',
};
