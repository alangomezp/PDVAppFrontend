import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectTabService {
  private selectedTabId$$: BehaviorSubject<string> = new BehaviorSubject<string>('')
  selectedTabId$ = this.selectedTabId$$.asObservable();

  constructor() { }

  setSelectedTabId(id: string){
    this.selectedTabId$$.next(id);
  }
}
