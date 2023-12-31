import { authSess, provider } from "../firebaseConfig";
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const googleHandler = async () => {
    provider.setCustomParameters({ prompt: 'select_account' });
    signInWithPopup(authSess, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            if (credential === null) throw console.error("credential is null");
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // redux action? --> dispatch({ type: SET_USER, user });
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
};