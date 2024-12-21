import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ExampleServiceService } from './services/example-service.service';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-angular';
  parentMessage = "This is a msg from parent."
  count: Number = 10;
  isDisabled: boolean = true;
  username: string = 'Moeej';
  showDiv: boolean = false;
  items : string[] = ["item1", "item2", "item3"];
  isActive: boolean = false;
  posts: any[] = [];

  constructor(private exampleService: ExampleServiceService,
      private apiService: ApiService
  ){}

  onClicked(){
    this.items = this.exampleService.getData();
    console.log(this.username);
    this.fetchPosts();
  }

  fetchPosts(){
    this.apiService.getPosts().subscribe((data) => {
      this.posts = data;
    })
  }
}
