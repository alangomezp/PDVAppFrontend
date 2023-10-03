import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoadingService } from '../util/loading.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private readonly loaderService: LoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.loaderService.showLoader()

    return next.handle(request).pipe(
      finalize(() => this.loaderService.hideLoader())
    )
  }
}
