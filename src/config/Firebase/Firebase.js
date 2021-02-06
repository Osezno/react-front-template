import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/storage';
//import 'firebase/functions';

import { FIREBASE_CONFIG } from '../../keys';

class Firebase {
    constructor() {
        app.initializeApp(FIREBASE_CONFIG);
        this.auth = app.auth();
        this.db = app.database(); // realtime
        this.fs = app.firestore();
        this.storage = app.storage();
      
    }

    getNotifications = (uuid) => this.db.ref(`${uuid}`)
  
}

export default Firebase;
