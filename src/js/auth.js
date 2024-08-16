import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const auth = getAuth();
const provider = new GoogleAuthProvider();

// Function to handle Google Sign-In
export function googleSignIn() {
  signInWithPopup(auth, provider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
      console.log('Logged in as:', user.displayName);
      // You can also redirect the user or perform other actions here
    }).catch((error) => {
      console.error('Login failed:', error.message);
    });
}


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


