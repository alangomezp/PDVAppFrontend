import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Validations } from '../../models/validations';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidatorService {

  constructor() { }

  public static validateForm(form: FormGroup, field: string, properties: string[]){
    let result: Validations = {
      IsValid: true,
      Message: ''
    };

    properties.forEach(element => {
     let isInvalid = (form.get(field)?.touched && form.get(field)?.errors?.[element])

      if (isInvalid) {
        switch (element) {
          case 'required':
                result = {
                  IsValid: false,
                  Message: 'Este campo es obligatorio'
                }
          break;
          case 'minlength':
                result = {
                  IsValid: false,
                  Message: `El campo necesita al menos ${form.get(field)?.errors?.[element]?.requiredLength} caracteres`
                }
          break;
          case 'email':
                result = {
                  IsValid: false,
                  Message: 'Este campo debe ser un correo valido'
                }
          break;
        
          default:
                result = {
                  IsValid: false,
                  Message: 'Campo invalido'
                }
          break;
        }
      }
      
    });    

    return result;

  }

  private validatePattern(pattern: string, msg: string){
    

  }


  // public validateMinLength(form: FormGroup, field: string){
  //   let isValid = (form.get(field)?.touched && form.get(field)?.errors?.['minlength']);

  //   if(!isValid){
  //     this.result$$.next({
  //       IsValid: false,
  //       Message: `El campo requier al menos ${form.get(field)?.errors?.['minlength']?.requiredLength}`
  //     })
  //   }

  // }

}
