import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlertManagerComponent } from './components/alert-manager/alert-manager.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'alert-mangaer',
    component: AlertManagerComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
