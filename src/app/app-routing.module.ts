import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreeComponent } from './free/free.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: FreeComponent },
  { path: '**', redirectTo: '' }, // catch all
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
