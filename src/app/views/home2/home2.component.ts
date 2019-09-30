import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from 'src/app/config/constants';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss']
})
export class Home2Component implements OnInit {
  constants: Constants = new Constants
  constructor(private http: HttpClient) { }

  ngOnInit() {
    let url = `${this.constants.url}\some`
    this.http.get(url)
      .subscribe((data) => {
        console.log(data)
      }, err => {
        console.log(err)
      })
  }

}
