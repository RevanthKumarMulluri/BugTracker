import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private db : AngularFireDatabase ) { }

  addProject(name){
    return this.db.list('projects').push(name);
  }

  getProjects(){
    return this.db.list('/projects');
  }
}
