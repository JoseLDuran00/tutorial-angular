import { Component } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service'; 
import { UploadService } from 'src/app/services/upload.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers : [ProjectService, UploadService]
})
export class EditComponent {
  public title : string;
  public project : Project;
  public save_project : any;
  public status : string = "";
  public filesToUpload : Array<File> = [] ;

  constructor(
    private _projectService : ProjectService,
    private _uploadService : UploadService
  ){
    this.title = " Crear Projecto ";
    this.project = new Project('','','','','',2023,'');
  }
}
