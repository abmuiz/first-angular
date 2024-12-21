import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {
constructor (){
  console.log('Constructor: Component is being created');
}
  ngOnChanges(changes: SimpleChanges): void {
    console.log("The header component changed.")
  }

 ngOnInit(): void {
   console.log("The header component is initialized.")
 }
 @Input() childData: string = '';
}
