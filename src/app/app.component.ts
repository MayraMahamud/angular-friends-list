import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorite: string = '';

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];
  faves: string[] = ['mayra', 'nigel'];

  addFaves(p:string) {
    this.faves.push(p);

  }

 
  
  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }
}
