import firebase from 'firebase/app';
import "firebase/auth"
import "firebase/storage"
import "firebase/database"
import  {config} from  "./constants"


firebase.initializeApp(config);
// Configure FirebaseUI.
export const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ]
};



export const nameRef = firebase.database().ref().child('data')
export const auth = firebase.auth()
export const storage = firebase.storage()
export const set = (child, data, callback) => {
  nameRef.child(child).set(data, (error) => {
    if (error) {
      console.log(error)
      callback({
        showModal: true,
        error: error.message
      })
    }
  })

}

