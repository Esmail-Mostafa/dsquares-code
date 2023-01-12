import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';

@NgModule({
  declarations: [NavbarComponent, SideBarComponent],
  imports: [CommonModule],
  exports: [NavbarComponent, SideBarComponent],
})
export class SharedModule {}
