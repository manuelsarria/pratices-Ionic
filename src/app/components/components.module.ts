import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent
  ],
  exports: [
    HeaderComponent,
    // se exporta para utilizarlo en el app component
    MenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }
