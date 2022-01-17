import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public route: Router) { }

  ngOnInit() {
  }
  hitung(){
  this.route.navigate(['../hitung'])
  }

  coundown(){
    this.route.navigate(['../coundown'])
    }

    universitas(){
      this.route.navigate(['../universitas'])
      }

}
