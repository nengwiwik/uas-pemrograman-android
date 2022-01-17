import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hitung',
  templateUrl: './hitung.page.html',
  styleUrls: ['./hitung.page.scss'],
})
export class HitungPage implements OnInit {
  public bil1: string ='0';
  public bil2: string ='0';
  public bil3: string ='0';
  public hasil: number;
  constructor() { }

  onClick(bil1,bil2, bil3){
    this.hasil = parseInt(bil1) + (parseInt(bil2) * parseInt(bil3));
    }
  ngOnInit() {
  }

}
