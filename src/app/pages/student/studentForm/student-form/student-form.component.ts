import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from 'src/app/models/student';
import { Validations } from 'src/app/models/validations';
import { FormValidatorService } from 'src/app/services/util/form-validator.service';
import { LoadingService } from 'src/app/services/util/loading.service';
import { SwalService, alertConfig } from 'src/app/services/util/swal.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit{
  studentForm!:FormGroup;
  student!: Student;
  registerDialog: alertConfig = {
    title: '¿Desea guardar los datos?',
    message: 'El estudiante sera registrado',
    type: 'info'
  }
  @Output() onSubmitClickedEvent = new EventEmitter<Student>();

  constructor(private readonly formBuilder: FormBuilder, readonly loadingService: LoadingService, private readonly swalService: SwalService) {}
  
  ngOnInit(): void {
    this.studentForm = this.initForm();
  }

  initForm():FormGroup{
    return this.formBuilder.group({
       firstName: ['', [Validators.required]],
       lastName: ['', [Validators.required]],
       email: ['', [Validators.required, Validators.email]],
       phone: ['', [Validators.required]],
       nationality: ['', [Validators.required]],
       churchName: ['', [Validators.required]],
       hasBagFund: [false],
       hoursQty: [0],
       admissionDate: ['', [Validators.required]]
     })
   }
 
   get firstname(){
    return FormValidatorService.validateForm(this.studentForm, 'firstName', ['required']);
   }
 
   get lastname():Validations{
     return FormValidatorService.validateForm(this.studentForm, 'lastName', ['required']);
   }
 
   get email():Validations{
     return FormValidatorService.validateForm(this.studentForm, 'email', ['required', 'email']);
   }
 
   get phone():Validations{
     return FormValidatorService.validateForm(this.studentForm, 'phone', ['required']);
   }
 
   get nationality():Validations{
     return FormValidatorService.validateForm(this.studentForm, 'nationality', ['required']);
   }
 
   get churchname():Validations{
     return FormValidatorService.validateForm(this.studentForm, 'churchName', ['required']);
   }
 
   get admissiondate():Validations{
     return FormValidatorService.validateForm(this.studentForm, 'admissionDate', ['required']);
   }

   onSubmitClicked(){
    this.swalService.showDialog(this.registerDialog).subscribe(res => {
      if (res) {
        this.student = {
          id: '',
          firstName: this.studentForm.controls['firstName'].value,
          lastName: this.studentForm.controls['lastName'].value,
          email: this.studentForm.controls['email'].value,
          phone: this.studentForm.controls['phone'].value,
          nationality: this.studentForm.controls['nationality'].value,
          churchName: this.studentForm.controls['churchName'].value,
          hasBagFund: this.studentForm.controls['hasBagFund'].value,
          hoursQty: this.studentForm.controls['hoursQty'].value,
          admissionDate: this.studentForm.controls['admissionDate'].value,
        }
    
        this.onSubmitClickedEvent.emit(this.student)
        this.studentForm.reset()
      } 
    })

    
   }

}
