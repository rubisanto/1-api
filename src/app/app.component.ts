import { Component, OnInit } from '@angular/core';
import { DataService } from './services/api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = '1-api';
  dataCars: any;
  dataBooks: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {

  }


  onCar() {

    this.dataService.getCars()
      .subscribe(data => {
        this.dataCars = data;
      });
  }

  onBook() {

    this.dataService.getBooks()
      .subscribe(data => {
        this.dataBooks = data;
      });
  }

}
