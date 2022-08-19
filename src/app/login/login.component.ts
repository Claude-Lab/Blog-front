import { Component, OnInit } from '@angular/core';
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  date = Date.now();

  constructor() { }

  ngOnInit(): void {
  }

}
