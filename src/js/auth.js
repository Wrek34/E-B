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
// Validates email format and password strength
function validateEmailAndPassword(email, password) {
    // Regex for validating email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);
    const isValidPassword = password.length >= 8; // Example: at least 8 characters
    return isValidEmail && isValidPassword;
}

// Function to handle user sign-up
function signUp(email, password) {
    // First, validate the user's email and password
    if (!validateEmailAndPassword(email, password)) {
        alert('Invalid email or password. Password must be at least 8 characters.');
        return;
    }
    // If valid, proceed to create user with Firebase Authentication
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('Signed up successfully!');
            alert('Registration successful!');
        })
        .catch((error) => {
            console.error('Error signing up:', error);
            alert(error.message); // Display error message to user
        });
}

