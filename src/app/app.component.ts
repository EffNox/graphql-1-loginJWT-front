import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';


@Component({ selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.scss'] })
export class AppComponent implements OnInit {
  title = 'loginRegisterJWT';
  constructor(private svApi: ApiService) { }

  ngOnInit(): void {
    this.svApi.login('hdxtremo@gmail.com', '123456');
    this.svApi.getAll().subscribe(rs => {
      console.log(rs);
    })
    this.svApi.getMe(localStorage.getItem('tk')).subscribe(rs => {
      console.log(rs);
    })
  }


}
