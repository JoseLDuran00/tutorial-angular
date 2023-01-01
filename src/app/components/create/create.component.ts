import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service'; 
import { UploadService } from 'src/app/services/upload.service';
import { Global } from 'src/app/services/global';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers : [ProjectService, UploadService]
})
export class CreateComponent  {

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

    onSubmit(form:undefined|any){
      console.log(this.project);
      this._projectService.saveProject(this.project).subscribe(
          response =>{
            console.log(response);
            if(response.project){
                
                
                // Subir la Imagen
                this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.project._id,[],this.filesToUpload, 'image')
                .then((result:any) => {

                  this.save_project = result.project;  

                  this.status = "success";
                    console.log(result);
                    form.reset();
                });


                
            }else{
              this.status = "failed";
            }
          },
          error => {
            console.log(<any>error);
          }
          
      );

    }

    fileChangeEvent(fileInput:any){
      this.filesToUpload = <Array<File>>fileInput.target.files;

    }

    
}
