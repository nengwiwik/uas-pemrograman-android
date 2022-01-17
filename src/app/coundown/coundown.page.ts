import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coundown',
  templateUrl: './coundown.page.html',
  styleUrls: ['./coundown.page.scss'],
})
export class CoundownPage implements OnInit {

  public bil: string ='100';
  public hasil: number = 0;
  constructor() { }

  ngOnInit() {
  }

  onCounter(bil){
    this.hasil = parseInt(bil);
    }
}
