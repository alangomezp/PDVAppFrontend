import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import Swal from 'sweetalert2';

export interface alertConfig{
  title: string,
  message: string,
  type: any
}

@Injectable({
  providedIn: 'root'
})
export class SwalService {

  constructor() { }

  showDialog(config: alertConfig): Observable<boolean>{
    let response: Subject<boolean> = new Subject<boolean>();

    Swal.fire({
      title: config.title,
      text: config.message,
      icon: config.type,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar!'
    }).then((result) => {
      if(result.isConfirmed){
        response.next(true);
      }else{
        Swal.fire('Cancelado', 'Nada sera borrado', 'error')
        response.next(false);
      }
    })

    return response.asObservable();
  }

  showAlert(config: alertConfig){
    Swal.fire(config.title, config.message, config.type)
  }

}
