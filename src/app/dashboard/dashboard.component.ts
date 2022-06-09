import { Component, OnInit } from '@angular/core';
import { Car } from '../model/car';
import { CarApiService } from '../components/car-list/services/car-api.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

cars: Car[]=[];

  constructor(private carApiService: CarApiService) { }

  ngOnInit(): void {
    this.getCars();
  }
getCars():void{
  this.carApiService.getCars().subscribe(cars=>this.cars=cars.slice( 2, 4))
}
}
