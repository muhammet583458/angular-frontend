import { Component, OnInit } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  deleteContact(){
    console.log(ContactComponent.arguments.test())
  }

}
