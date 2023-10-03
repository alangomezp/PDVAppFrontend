import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private apiCount: number = 0;
  private isLoading$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading$: Observable<boolean> = this.isLoading$$.asObservable();

  constructor() { }

  showLoader(){
    if (this.apiCount !== 0) {
      this.isLoading$$.next(true);
    }

    this.apiCount++;
  }

  hideLoader(){
    this.apiCount--;
    
    if (this.apiCount === 0) {
      this.isLoading$$.next(false);
    }
  }
}
