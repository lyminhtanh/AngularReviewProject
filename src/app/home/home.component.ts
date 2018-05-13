import { Component, OnInit } from '@angular/core';


interface Archive {
  year: number,
  month: number,
  day: number,
  name?: string
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  archives: Archive[] = [
    {
      year: 2018,
      month: 2,
      day: 14
    },
    {
      year: 2018,
      month: 1,
      day: 13
    },
    {
      year: 2018,
      month: 3,
      day: 15
    }
  ];
  constructor() { 
    this.archives.forEach((archive) => {
      archive.name = archive.year+'/'+archive.month+'/'+archive.day;
    })
  }

  ngOnInit() {
  }

}
