import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/model/car';
import { CarApiService } from '../car-list/services/car-api.service';


@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {

  car?: Car;


  constructor(
    private route: ActivatedRoute,
    private carApiService: CarApiService,
    // private location: Location
  ) { }

  ngOnInit(): void {
    this.getCar()
  }

  getCar(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.carApiService.getCar(id).subscribe({
    next: (auto) => this.car = auto,
    error: (err) => console.log(err)
    })
  }

}
