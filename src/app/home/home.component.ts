import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

interface Contact {
  nom: string;
  prenom: string;
  num: number;
  status: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  Nom! : string;
  Prenom!: string;
  Num!: number;
  Date!: Date;
  Contacts! : Contact[];

  constructor(private contactService : ContactService) {}

  ngOnInit() {
    // this.Nom = "Outirste";
    // this.Prenom = "Mouad";
    // this.Num = 21000736;
    this.Contacts = this.contactService.getContacts();
    this.Date = new Date();
  
  }
  removeContact(i : number) {
    //console.log(i);
    this.Contacts.splice(i,1);
  }
}
