import { Injectable } from '@angular/core';

export interface ToastInfo{
  header: string,
  classname: string,
  body: string,
  delay?: number
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts: ToastInfo[] = []

  constructor() { }

  show(header: string, body: string, classname: string){
    this.toasts.push({header, body, classname})
  }
}
