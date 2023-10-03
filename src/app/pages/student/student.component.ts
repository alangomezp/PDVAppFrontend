import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentEdit } from 'src/app/models/studentEdited';
import { StudentService } from 'src/app/services/backend/student.service';
import { LoadingService } from 'src/app/services/util/loading.service';
import { SelectTabService } from 'src/app/services/util/select-tab.service';
import { SwalService } from 'src/app/services/util/swal.service';
import { ToastService } from 'src/app/services/util/toast.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: Student[] = []

  constructor(readonly studentService: StudentService, 
              private readonly toastService: ToastService, 
              readonly selectTabService: SelectTabService,
              readonly loadingService: LoadingService,
              private readonly swalService: SwalService) {}

  ngOnInit():void{
    this.selectTabService.setSelectedTabId('form')
  }

  getStudents(){
    this.studentService.getStudents().subscribe(response => {
      this.students= [...response]
    });
  }
     
  addStudent(student: Student):void{
    this.studentService.addStudent(student).subscribe(response => {
      if(response.success === true){
        this.toastService.show('Registro completado', response.message, 'bg-success text-light')
      }else{
        this.toastService.show('Error de Registro', response.message, 'bg-danger text-light')
      }
    })
  }

  updateStudent(studentEdit: StudentEdit){
    this.studentService.updateStudent(studentEdit, studentEdit.id).subscribe(response => {
      if(response.success){
        this.swalService.showAlert({title: 'Modificado Correctamente', message: response.message, type: 'success'})
        this.getStudents()
      }else{
        this.swalService.showAlert({title: 'Oops...', message: response.message, type: 'error'})
      }
    })
  }

  deleteStudent(id: string){
    this.studentService.deleteStudent(id).subscribe(response => {
      if(response.success){
        this.swalService.showAlert({title: 'Eliminado Correctamente', message: response.message, type: 'success'})
        this.getStudents()
      }else{
        this.swalService.showAlert({title: 'Oops...', message: response.message, type: 'error'})
      }
    })
  }

  selectTab(event: any){
    event.preventDefault();
    this.selectTabService.setSelectedTabId(event.target.id)
  }

}
