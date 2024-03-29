export const signin =(credentials)=> {
 return (dispatch, getState, {getFirebase}) => {
     const firebase= getFirebase();

     firebase.auth().signInWithEmailAndPassword(
         credentials.email,
         credentials.password
     ).then (() => {
         dispatch ({ type: 'LOGIN_SUCCESS'})
     }).catch((err) => {
         dispatch ({type :'LOGIN_ERROR',err})
     });
 }
}


export const signout =() => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase= getFirebase();

        firebase.auth().signOut().then(()=> {
            dispatch ({ type: 'SIGNOUT_SUCESS'})
        });
    }
}

export const signup =(newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
        const firebase=getFirebase();
        const firestore=getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
           newUser.email,
           newUser.password 
        ).then((resp) => {
            return firestore.collection('user').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials : newUser.firstName[0]+newUser.lastName[0]
            })
        }).then (() => {
            dispatch({ type: 'SIGNUP_SUCCESS'})
        }).catch(err => {
            dispatch ({ type: 'SIGN_ERROR', err})
        })
        }
}