
const Strength = {
    WEAK: 'WEAK',
    MEDIUM: 'MEDIUM',
    STRONG: 'STRONG'
};

// Function to generate a password
function generatePassword(length, strength) {
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let characterSet = lowerCaseChars;

    if (strength === Strength.MEDIUM || strength === Strength.STRONG) {
        characterSet += upperCaseChars;
    }

    if (strength === Strength.STRONG) {
        characterSet += numberChars + specialChars;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
    }

    return password;
}


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('password-form');
    const passwordOutput = document.getElementById('password-output');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const length = parseInt(document.getElementById('length').value);
        const strength = document.getElementById('strength').value;

        const password = generatePassword(length, strength);
        passwordOutput.textContent = password;
    });
});
