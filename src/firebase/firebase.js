import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDegIwz6Q_hGTSmFlqtHYE87Dl6Ee23DiI",
  authDomain: "wt-gadgets.firebaseapp.com",
  projectId: "wt-gadgets",
  storageBucket: "wt-gadgets.appspot.com",
  messagingSenderId: "659905672365",
  appId: "1:659905672365:web:5dfd668852230681e38224",
  measurementId: "G-JMD7YEWBL2"
};

class Firebase {
  constructor(){
    app.initializeApp(firebaseConfig);
    
    this.storage = app.storage();
    this.db = app.firestore();
    this.auth = app.auth();
  }

  createAccount = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);
  signIn = (email, password) => this.auth.signInWithEmailAndPassword(email, password);
  signInWithGoogle = () => this.auth.signInWithPopup(new app.auth.GoogleAuthProvider());
  signOut = () => this.auth.signOut();

  addUser = (id, user) => { this.db.collection('users').doc(id).set(user) };
  getUser = id => this.db.collection('users').doc(id).get();

  passwordUpdate = password => this.auth.currentUser.updatePassword(password);

  changePassword = (currentPassword, newPassword) => {
    return new Promise((resolve, reject) => {
      this.reauthenticate(currentPassword).then(() => {
        const user = this.auth.currentUser;
        user.updatePassword(newPassword).then(() => {
          resolve("Password Updated Successfully");
        }).catch(error => reject(error));
      }).catch(error => reject(error));
    });
  };

  updateEmail = (currentPassword, newEmail) => {
    return new Promise((resolve, reject) => {
      this.reauthenticate(currentPassword).then(() => {
        const user = this.auth.currentUser;
        user.updateEmail(newEmail).then(() => {
          resolve("Email Updated Successfully");
        }).catch(error => reject(error));
      }).catch(error => reject(error));
    });
  };

  updateProfile = (id, updates) => this.db.collection('users').doc(id).update(updates);

  reauthenticate = currentPassword => {
    const user = this.auth.currentUser;
    const cred = app.auth.EmailAuthProvider.credential(user.email, currentPassword);

    return user.reauthenticateWithCredential(cred);
  };

  onAuthStateChanged = () => {
    return new Promise ((resolve, reject) => {
      this.auth.onAuthStateChanged((user) => {
        if (user) {
          return resolve(user);
        } else {
          return reject(new Error('Auth State Changed Failed'));
        }
      });
    });
  };

  setAuthPersistence = () => this.auth.setPersistence(app.auth.Auth.Persistence.LOCAL);

  getProducts = (lastRefkey) => {
    let didTimeout = false;
    console.log("object")
    return new Promise(async (resolve, reject) => {
      if (lastRefkey) {
        try{
          const query = this.db.collection('products').orderBy(app.firestore.FieldPath.documentId()).startAfter(lastRefkey).limit(12);
          
          const snapshot = await query.get();
          const products = [];
          snapshot.forEach(doc => products.push({ id: doc.id, ...doc.data() }));
          const lastKey = snapshot.docs[snapshot.docs.length - 1];
          console.log("helloo")
          resolve({ products, lastKey });
        }catch(e){
          reject(':( Failed to fetch products.')
        }
      } else {
        const timeout = setTimeout(() => {
          didTimeout = true;
          reject('Request timeout, please try again!');
        }, 15000)
        try{
          const totalQuery = await this.db.collection('products').get();
          const total = totalQuery.docs.length;
          const query = this.db.collection('products').orderBy(app.firestore.FieldPath.documentId()).limit(12);
          const snapshot = await query.get();

          clearTimeout(timeout);
          if (!didTimeout){
            const products = [];
            snapshot.forEach(doc => products.push({id: doc.id, ...doc.data()}));
            console.log(products)
            const lastKey = snapshot.docs[snapshot.docs.length - 1];
            resolve({products, lastKey, total})
          }
        }catch(e) {
          console.log(e)
          if (didTimeout) return;
          console.log('Failed to fetch products: an error occure while trying to fetch products or there is no products.', e);
          reject('failed to fetch products.')
        }
      }
    });
  }

  addProduct = (id, product) => this.db.collection('products').doc(id).set(product);

  generateKey = () => this.db.collection('products').doc().id;

  storeImage = async (id, folder, imageFile) => {
    const snapshot = await this.storage.ref(folder).child(id).put(imageFile);
    const downloadURL = await snapshot.ref.getDownloadURL();
    return downloadURL;
  }

  deleteImage = id => this.storage.ref('products').child(id).delete();

  editProduct = (id, updates) => this.db.collection('products').doc(id).update(updates);

  removeProduct = id => this.db.collection('products').doc(id).delete();
}

const firebase = new Firebase();

export default firebase;
