import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [],
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {
  @Input('name') name: string = '';
  @Output('favorite') favorite = new EventEmitter<string>();
  @Output('addFaves') addFaves = new EventEmitter<string>();
  @Output('removeFaves') removeFaves = new EventEmitter<string>();

  addToFaves(p:string){
    this.addFaves.emit(p);
  }

  


}
