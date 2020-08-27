import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { NgForm } from '@angular/forms';

export interface Project { key:string,name:string};
@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  selectedRowsChecked = [];
  projects : Project [];
  searchText:string = '';
  success:boolean = false;
  error:boolean = false;
  errorMsg = "";
  showSpinner : boolean = false;
  

  constructor(private projectservice : ProjectService) { 
    this.getProjects();
  }

  ngOnInit(): void {
    
  }

  getProjects(){
    this.showSpinner=!this.showSpinner;
    this.projectservice.getProjects().subscribe(projects => {
      this.projects= projects.map(p => {
        this.showSpinner=false;
        return {
          key:p.payload.doc.id,
          ...p.payload.doc.data()
        } as Project
      })
  });
  }


  onSubmit(project : NgForm) {
    this.projectservice.addProject(project.value.projectname).then(res => {
        this.success=true;
        
    }).catch(e => {
        this.error = true;
        this.errorMsg = e;
    });
    setTimeout(function() {
      this.success = false;
      this.error = false;
    }.bind(this), 1000);
  }

  deleteProjects(){
    console.log(this.selectedRowsChecked);
    this.projectservice.deleteProjects(this.selectedRowsChecked);
    this.searchText='';
  }

}
