import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/silkw3b.model';
import { Silkw3bService } from 'src/app/services/silkw3b.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent  implements OnInit{
  contact: Contact = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };
  submitted = false;
  showMessage = false;
  constructor(private silkw3bService: Silkw3bService){}
  ngOnInit(): void {
      
  }
  saveContact(): void{
    const data = {
      name: this.contact.name,
      email: this.contact.email,
      phone: this.contact.phone,
      subject: this.contact.subject,
      message: this.contact.message
    };
    this.silkw3bService.contact(data).subscribe({
      next: (res) =>{
        console.log(res);
        this.submitted = true;
        this.showMessage = true;
        this.contact = {
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        };
        // Hide message after 10 seconds
        setTimeout(() => {
          this.showMessage = false;
        }, 10000); // 10 seconds
      },
      error:(e) => console.log(e)
    });
  }
}
