import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-universitas',
  templateUrl: './universitas.page.html',
  styleUrls: ['./universitas.page.scss'],
})
export class UniversitasPage implements OnInit {

  mahasiswa: any=[];
  constructor(private http: HttpClient) {}
  ngOnInit(){
  this.http.get('http://universities.hipolabs.com/search?country=Indonesia')
  .subscribe(data=>{
  this.mahasiswa = data;
  });
  }

}
