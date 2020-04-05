import { Task } from './models/task.model';

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  tasks$: Observable<any[]>;
  constructor(private db: AngularFirestore){

  }




  ngOnInit(): void {
   this.tasks$ = this.db.collection<Task>('tasks').valueChanges();

}
