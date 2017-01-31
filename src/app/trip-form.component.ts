import { Component } from '@angular/core';
import { Trip }    from './trip';

@Component({
  moduleId: module.id,
  selector: 'trip-form',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip-form.component.css']
})

export class TripFormComponent {
  cities = ['Medellín', 'Bogotá', 'Cartagena', 'San Andres', 'Miami', 'Fiji', 
            'New York', 'Los Angeles', 'Rio de Janeiro', 'Lima', 'Santiago',
            'Madrid', 'Paris',  'Londres', 'Estocolmo', 'Moscú', 'Shangai', 'Tokio'];
  today = new Date().getFullYear() + '-' + this.parseMonth(new Date().getMonth() + 1) + '-' + new Date().getDate();
  model = new Trip(this.cities[0], this.cities[6], this.today, this.setReturnDate(), 1);
  submitted = false;
  
  parseMonth(month){
    if(month < 10){
      month = "0" + month;
    }
    return month
  }

  setReturnDate(){
    const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let day = new Date().getDate();
    let month = new Date().getMonth() + 1;
    if(day > monthLength[month]){
      day = monthLength[month];
    }

    return new Date().getFullYear() + '-' + this.parseMonth(month + 1) + '-' + day;
  }

  addOrSubstractPassengers(isAdding){
    
    if(isAdding){ 
      this.model.passengers = (this.model.passengers < 10) ? this.model.passengers + 1 : 10;
    }else{
      this.model.passengers = (this.model.passengers > 1) ? this.model.passengers - 1 : 1;
    }
  }

  onSubmit() { 
    console.log("Succesfull submitted");
    this.submitted = true;
  }

  newTrip() {
    this.submitted = false;
    this.model = new Trip('', '', null, null, 1);
  }
}