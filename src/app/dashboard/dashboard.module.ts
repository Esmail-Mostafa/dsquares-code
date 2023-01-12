import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewComponent } from './Components/add-new/add-new.component';

@NgModule({
  declarations: [AddNewComponent],
  imports: [CommonModule, SharedModule],
})
export class DashboardModule {}
