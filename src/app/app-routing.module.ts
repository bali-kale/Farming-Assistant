import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddComplaintsComponent } from './add-complaints/add-complaints.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ComplaintDetailsComponent } from './complaint-details/complaint-details.component';
import { ComplaintListComponent } from './complaint-list/complaint-list.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UpdateComplaintComponent } from './update-complaint/update-complaint.component';

const routes: Routes = [
  {path:'', component: HomepageComponent},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'user', component: UserDashboardComponent},
  {path:'admin', component: AdminDashboardComponent},
  {path:'aboutus', component: AboutusComponent},
  {path:'contactus', component: ContactusComponent},
  {path: 'complaints', component: ComplaintListComponent},
  {path: 'add-complaints', component: AddComplaintsComponent},
  {path:'update-complaint/:id', component:UpdateComplaintComponent},
  {path: 'complaint-details/:id', component:ComplaintDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }