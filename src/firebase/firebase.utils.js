import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC5H7eCEXF4iYM8WmxhHMrB0A2IqKdmrH8',
  authDomain: 'inshorts-db.firebaseapp.com',
  databaseURL: 'https://inshorts-db.firebaseio.com',
  projectId: 'inshorts-db',
  storageBucket: 'inshorts-db.appspot.com',
  messagingSenderId: '192464596508',
  appId: '1:192464596508:web:c376ae176a78ca86f1f9d9'
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export const auth = firebase.auth();

export const fetchNews = async () => {
  const snapshot = await db.collection('news').orderBy('time', 'desc').get();
  return snapshot.docs.map((doc) => {
    console.log(doc.data());
    return {
      id: doc.id,
      ...doc.data()
    };
  });
};

export const addNewsToFirestore = async (news) => {
  try {
    const addedNews = await db.collection('news').add(news);
    return addedNews;
  } catch (error) {
    console.log('Error adding news');
  }
};



export default firebase;