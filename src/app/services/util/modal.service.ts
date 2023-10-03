import { Injectable, Type } from '@angular/core';
import { NgbModalConfig, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { StudentEdit } from 'src/app/models/studentEdited';


@Injectable({
  providedIn: 'root'
})
export class ModalService {
  config: NgbModalOptions = {
    backdrop: 'static',
    keyboard: false
  };

  private modalData$$: BehaviorSubject<[]> = new BehaviorSubject<[]>([]);
  private modalData$ = this.modalData$$.asObservable()

  constructor(private modalService: NgbModal) {
		
	}

  open(HtmlContent: any, InputContent: any){
    this.modalService.open(HtmlContent, this.config)
    this.modalData$$.next(InputContent)
  }

  close(){
    this.modalService.dismissAll()
  }

  getData<Type extends Array<Type>>(entity: Type): Type{

    this.modalData$.subscribe(res => {
      for (let key in res) {
        if (Object.keys(entity).includes(key)) {
          entity[key] = res[key]
        }
      }
    }).unsubscribe()

    return entity
  }

}