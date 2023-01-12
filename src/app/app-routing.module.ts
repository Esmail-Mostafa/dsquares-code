import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewComponent } from './dashboard/Components/add-new/add-new.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-new' },
  { path: 'add-new', component: AddNewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
