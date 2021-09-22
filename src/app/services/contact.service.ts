import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';
import { ContactResponseModel } from '../models/contactResponseModel';
import { ContactsResponseModel } from '../models/contactsResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  apiUrl="http://localhost:8080/api/contacts/"
  constructor(private httpClient:HttpClient) { }
  getContacts():Observable<ContactsResponseModel>{
    return this.httpClient.get<ContactsResponseModel>(this.apiUrl+"getall");
  }
  addContact(contact:Contact){
    return this.httpClient.post(this.apiUrl+"add",contact);
  }
  deleteContact(contact:Contact){
    return this.httpClient.post(this.apiUrl+"delete",contact);
  }
  getContactById(id:number):Observable<ContactResponseModel>{
    return this.httpClient.get<ContactResponseModel>(this.apiUrl+"getbyid?id="+id);
  }
}
