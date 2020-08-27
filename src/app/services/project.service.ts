import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private db : AngularFirestore ) { }

  addProject(name){
    return this.db.collection('projects').add({name:name});
  }

  getProjects(){
    return this.db.collection('/projects').snapshotChanges();
  }

  async deleteProjects(projectlist :string[]) {
    
    projectlist.forEach((value,index) => {
        this.db.doc('projects/'+value).delete();
    })
    
  }

  
}
