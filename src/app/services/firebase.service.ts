import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { environment } from '../../environments/environment';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private app = initializeApp(environment.firebaseConfig); 
  private db = getDatabase(this.app); 
  constructor() { }

 
  saveContactForm(contactData: any): Promise<void> {
    const contactRef = ref(this.db, 'contacts'); 
    return push(contactRef, contactData) 
      .then(() => console.log('Data stored successfully'))
      .catch(error => console.error('Error storing data:', error));
  }
}
