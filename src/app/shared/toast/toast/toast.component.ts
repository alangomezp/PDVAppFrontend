import { Component } from '@angular/core';
import { ToastService } from 'src/app/services/util/toast.service';

@Component({
  selector: 'app-toast',
  template: `<ngb-toast
              *ngFor="let toast of toastService.toasts"
              [class]="toast.classname"
              [header]="toast.header" 
              [autohide]="true" 
              [delay]="toast.delay || 5000">
                {{toast.body}}
              </ngb-toast>`,
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {

  constructor(readonly toastService: ToastService) {}

}
