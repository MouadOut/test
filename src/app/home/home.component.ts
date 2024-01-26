import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit() {
    // this.Nom = "Outirste";
    // this.Prenom = "Mouad";
    // this.Num = 21000736;
    this.Date = new Date();
    this.Contacts = [
      {nom:"outirste",prenom:"mouad",num:+212650078678,status:"active"},
      {nom:"el jabli",prenom:"saad",num:+212645782159,status:"inactive"},
      {nom:"outirste",prenom:"ayoub",num:+212654789654,status:"inactive"},
      {nom:"hakimi",prenom:"achraf",num:+212615478965,status:"active"}

    ]
  }
}
