import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { WineNewDeactivateGuard } from './guard/wine-new-deactivate-guard';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { WineDetailComponent } from './wines/wine-detail/wine-detail.component';
import { WineListComponent } from './wines/wine-list/wine-list.component';
import { WineNewComponent } from './wines/wine-new/wine-new.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'wine/create',
    component: WineNewComponent,
    canActivate: [AuthGuard],
    canDeactivate: [WineNewDeactivateGuard],
  },
  { path: 'wine/list', component: WineListComponent },
  { path: 'wine/:id', component: WineDetailComponent },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
