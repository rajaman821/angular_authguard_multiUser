import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidateBaseComponent } from './candidate-base/candidate-base.component';
import { CompanyBaseComponent } from './company-base/company-base.component';
import { CandidateLoginComponent } from './candidate-login/candidate-login.component';
import { CompanyLoginComponent } from './company-login/company-login.component';
import { CandidateDashboardComponent } from './candidate-dashboard/candidate-dashboard.component';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';
import { candidateGuard } from './guard/candidate.guard';
import { CompanyGuard } from './guard/company.guard';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
import { UnauthorizedComponent } from './error/unauthorized/unauthorized.component';


const routes: Routes = [
  { path: '', component: CandidateLoginComponent },
  { path: 'company-login', component: CompanyLoginComponent },
  { path: 'no-page', component: PageNotFoundComponent },
  { path: 'no-access', component: UnauthorizedComponent },
  {
    path: 'candidate',
    component: CandidateBaseComponent,
    canActivate: [candidateGuard],
    children: [
      {
        path: '',
        component: CandidateDashboardComponent
      },
      {
        path: 'candidate-dashboard',
        component: CandidateDashboardComponent
      },
      {
        path: 'candidate-login',
        component: CandidateLoginComponent
      },
    ]
  },
  {
    path: 'company',
    component: CompanyBaseComponent,
    canActivate: [CompanyGuard],
    children: [
      {
        path: '',
        component: CompanyDashboardComponent
      },
      {
        path: 'company-dashboard',
        component: CompanyDashboardComponent
      },
      {
        path: 'company-login',
        component: CompanyLoginComponent
      },
    ]
  },
  { path: '**', redirectTo: 'no-page' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
