import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();

function validateEmailAndPassword(email, password) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || password.length < 8) {
        alert('Invalid email or password format. Password must be at least 8 characters long.');
        return false;
    }
    return true;
}

export function signUp(email, password) {
    if (!validateEmailAndPassword(email, password)) return;
    
    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert('Registration successful!');
        })
        .catch((error) => {
            console.error('Error signing up:', error);
            alert(error.message);
        });
}

export function login(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            console.log('Logged in successfully!');
        })
        .catch((error) => {
            console.error('Error logging in:', error);
            alert(error.message);
        });
}
