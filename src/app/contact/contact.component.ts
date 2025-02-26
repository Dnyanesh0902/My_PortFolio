import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {
  name = '';
  email = '';
  subject = '';
  message = '';

  constructor(private firebaseService: FirebaseService) {}

  sendMessage() {
    if (this.name && this.email && this.subject && this.message) {
      const contactData = {
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message,
        timestamp: new Date().toISOString()
      };

      this.firebaseService.saveContactForm(contactData)
        .then(() => {
          alert('Message sent successfully! ✅');
          this.name = '';
          this.email = '';
          this.subject = '';
          this.message = '';
        })
        .catch(error => {
          console.error('Error sending message:', error);
          alert('Failed to send message. ❌');
        });
    } else {
      alert('Please fill all fields.');
    }
  }
}
