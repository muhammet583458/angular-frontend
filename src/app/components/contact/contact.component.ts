import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contacts: Contact[] = [];
localcheck:string|null;
  currentContact: Contact={id:0,contactPhone:"",gender:true,contactLastName:"",contactName:""};
  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.getContacts();
    this.localcheck=localStorage.getItem('checked');
  }
  getContacts() {
    this.contactService.getContacts().subscribe((response) => {
      this.contacts = response.data;
      
    });
  }
  getCurrentContactClass(contact: Contact) {
    if (contact == this.currentContact) {
      return 'currentContact';
    } else {
      return '';
    }
  }
  setCurrentContact(contact: Contact) {
    this.currentContact = contact;
  }

  getGender(contact: Contact) {
    return contact.gender;
  }
  deleteContact(){
    this.contactService.deleteContact(this.currentContact).subscribe(data=>{

    })
    window.location.reload();
  }
  getCurrentContactId(){
    return this.currentContact.id
  }
  setStyle(event:any){
    if(event.target.checked){
      localStorage.setItem('checked',"true");
      
    }
    else{
      localStorage.setItem('checked',"false");
    }

   window.location.reload();
  }
  
}
