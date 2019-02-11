export const signin = (creds) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            creds.email, creds.password
        )
        .then(() => {
            dispatch({
                type: 'LOGIN_SUCCESS'
            })
        })
        .catch((err) => {
            dispatch({
                type: 'LOGIN_ERROR',
                err
            })
        })
    }
}

export const signout = () => { 
    return(dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
                dispatch({type: 'SIGNOUT_SUCCESS'});
            });
    }

}

export const signup = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
            .then((resp) => {
                return firestore.collection('users').doc(resp.user.uid).set({
                    firstname: newUser.firstname,
                    lastname: newUser.lastname
                })
            })
            .then(() => {
                dispatch({type: 'SIGNUP_SUCCESS'})
            }).catch(err => {
                dispatch({type: 'SIGNUP_ERROR', err})
            })
    }
}