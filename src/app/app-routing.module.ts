import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StudentComponent } from './pages/student/student.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { FundbagComponent } from './pages/fundbag/fundbag.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'student', component: StudentComponent},
  {path:'payment', component: PaymentComponent},
  {path:'fundbag', component: FundbagComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
