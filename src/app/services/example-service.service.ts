import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleServiceService {

  constructor() { }

  getData(){
    return ["newItem1", "newItem2"]
  }
}
