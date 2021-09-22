import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';
@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent implements OnInit {
contactAddForm : FormGroup;
currentContact:Contact;
contactName:String;
id=0;
contactLastName:String;
contactPhone:String;
  constructor(private formBuilder:FormBuilder,private contactService:ContactService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.createContactAddForm();
    this.activatedRoute.params.subscribe((params)=>{
      if(params["id"]){
        this.getContactsDetail(params["id"]);
      }
    })
  }
  getContactsDetail(id:number){
    this.contactService.getContactById(id).subscribe((response)=>{
      this.currentContact=response.data;
      this.id=response.data.id;
    this.contactName=response.data.contactName;
    this.contactLastName=response.data.contactLastName;
    this.contactPhone=response.data.contactPhone;
    console.log(response);
    })
   
  }

createContactAddForm(){
this.contactAddForm = this.formBuilder.group({
  contactName:["",Validators.required],
  contactLastName:["",Validators.required],
  gender:["",Validators.required],
  contactPhone:["",Validators.required]
})
}
add(){
  if(this.contactAddForm.valid){
    let contactModel = Object.assign({},this.contactAddForm.value)
    contactModel.id=this.id;
    console.log(contactModel);
    this.contactService.addContact(contactModel).subscribe(data=>{
      
    })
    window.location.reload();
  }
  
}
}
