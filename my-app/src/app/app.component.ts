import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  video = {
  title: 'My love',
  views: 2,
  liked: false
  }

  handleClick(){
  console.log('someone clicked on the button');
  }
}
