import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  mail: string; 

  constructor() { }

  ngOnInit() {
    this.mail = localStorage.getItem('Mail');
  }

}
