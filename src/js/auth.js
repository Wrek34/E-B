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
