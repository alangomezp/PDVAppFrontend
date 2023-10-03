import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `<div class="d-flex justify-content-center">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>` ,
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent {

}
