import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from 'src/app/models/student';
import { faTrash, faEdit, faCheck, faMinus } from '@fortawesome/free-solid-svg-icons';
import { SwalService, alertConfig } from 'src/app/services/util/swal.service';
import { ModalService } from 'src/app/services/util/modal.service';
import { StudentEdit } from 'src/app/models/studentEdited';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  editStudentForm!: FormGroup
  @Input() students: Student[] = []
  @Output() onDeleteEvent = new EventEmitter<string>()
  @Output() onGetEvent = new EventEmitter<void>()
  @Output() onEditEvent = new EventEmitter<StudentEdit>()
  faTrash = faTrash;
  faEdit = faEdit;
  faCheck = faCheck;
  faMinus = faMinus;
  deleteDialog: alertConfig = {
    title: '¿Está seguro/a?',
    message: 'Se eliminirá permanentemente',
    type: 'warning'
  };
  studentToEdit: StudentEdit = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    hasBagFund: false,
    hoursQty: 0,
  } as StudentEdit;
  

  constructor(readonly modalService: ModalService, private readonly swalService: SwalService, private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.onGetOccur()
    this.editStudentForm = this.initEditForm();
  }

  initEditForm():FormGroup{
    return this.formBuilder.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      hasBagFund: [false, [Validators.required]],
      hoursqty: [0, [Validators.required]]
    })
  }

  onGetOccur(){
    this.onGetEvent.emit()
  }

  onDeleteClicked(id: string){
    this.swalService.showDialog(this.deleteDialog).subscribe(res => {
      if(res){
        this.onDeleteEvent.emit(id)
      }
    })
  }

  setEditFormInputs(){

    this.studentToEdit = this.modalService.getData<StudentEdit>(this.studentToEdit)

    this.editStudentForm.setValue({
      firstname: this.studentToEdit.firstName,
      lastname: this.studentToEdit.lastName,
      email: this.studentToEdit.email,
      phone: this.studentToEdit.phone,
      hasBagFund: this.studentToEdit.hasBagFund,
      hoursqty: this.studentToEdit.hoursQty
    })
  }

  onSaveEditClicked(){

    console.log(this.editStudentForm.get('hoursqty')?.value);

    this.studentToEdit.firstName = this.editStudentForm.get('firstname')?.value;
    this.studentToEdit.lastName = this.editStudentForm.get('lastname')?.value;
    this.studentToEdit.email = this.editStudentForm.get('email')?.value;
    this.studentToEdit.phone = this.editStudentForm.get('phone')?.value;
    this.studentToEdit.hasBagFund = this.editStudentForm.get('hasBagFund')?.value;
    this.studentToEdit.hoursQty = this.editStudentForm.get('hoursqty')?.value;

    this.onEditEvent.emit(this.studentToEdit)
    this.modalService.close()
  }

}
