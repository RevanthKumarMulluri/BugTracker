import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects;
  success:boolean = false;
  error:boolean = false;
  errorMsg = "";
  constructor(private projectservice : ProjectService) { 
    this.projectservice.getProjects().valueChanges().subscribe(projects => {
        this.projects = projects;
    })
  }

  ngOnInit(): void {
  }


  onSubmit(project : NgForm) {
    this.projectservice.addProject(project.value.projectname).then(res => {
        this.success=true;
        project.reset();
    }).catch(e => {
        this.error = true;
        this.errorMsg = e;
    });
    setTimeout(function() {
      this.success = false;
      this.error = false;
    }.bind(this), 1000);
  }

}
