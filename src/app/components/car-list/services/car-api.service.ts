import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CARS } from 'src/app/model/mock-cars';
import { MessageService } from 'src/app/message.service';
import { Car } from 'src/app/model/car';

@Injectable({
  providedIn: 'root'
})
export class CarApiService {

  constructor(private messageService: MessageService) { }


  getCars():Observable<Car[]>{
    const cars = CARS;
    this.messageService.add('CarsService: fetched Cars')
    return of(cars);

  }

  getCar(id:string): Observable<Car>{
    const car = CARS.find(c => c.id === id);
    this.messageService.add('id');
    return of(car!)
  }
}
