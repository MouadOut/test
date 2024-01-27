import { Injectable } from '@angular/core';

interface Contact {
  nom: string;
  prenom: string;
  num: number;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  getContacts():Contact[]{
    var Contacts = [
      {nom:"outirste",prenom:"mouad",num:+212650078678,status:"active"},
      {nom:"el jabli",prenom:"saad",num:+212645782159,status:"inactive"},
      {nom:"outirste",prenom:"ayoub",num:+212654789654,status:"inactive"},
      {nom:"hakimi",prenom:"achraf",num:+212615478965,status:"active"},
      {nom:"ziyech",prenom:"hakim",num:+212615478965,status:"active"}
    ]
    return Contacts;
  }
}
