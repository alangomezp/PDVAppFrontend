import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarModule } from 'ng-cdbangular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { LoginComponent } from './auth/login/login.component';
import { StudentComponent } from './pages/student/student.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { FundbagComponent } from './pages/fundbag/fundbag.component';
import { HomeComponent } from './pages/home/home.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StudentFormComponent } from './pages/student/studentForm/student-form/student-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastComponent } from './shared/toast/toast/toast.component';
import { DashboardComponent } from './pages/student/dashboard/dashboard/dashboard.component';
import { LoaderInterceptor } from './services/interceptors/loader.interceptor';
import { LoadingComponent } from './shared/loading/loading/loading.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    SidebarComponent,
    LoginComponent,
    StudentComponent,
    PaymentComponent,
    FundbagComponent,
    HomeComponent,
    StudentFormComponent,
    ToastComponent,
    DashboardComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SidebarModule,
    DatePickerModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
