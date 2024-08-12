import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();

export function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('Signed up successfully!');
        })
        .catch((error) => {
            console.error('Error signing up:', error);
        });
}

export function login(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('Logged in successfully!');
        })
        .catch((error) => {
            console.error('Error logging in:', error);
        });
}

// Add validation function
function validateEmailAndPassword(email, password) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);
    const isValidPassword = password.length >= 8; // Simple example, can be more complex
    return isValidEmail && isValidPassword;
}

// Update signUp and login functions to include validation
function signUp(email, password) {
    if (!validateEmailAndPassword(email, password)) {
        alert('Invalid email or password. Password must be at least 8 characters.');
        return;
    }
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('Signed up successfully!');
            alert('Registration successful!');
        })
        .catch((error) => {
            console.error('Error signing up:', error);
            alert(error.message);
        });
}

