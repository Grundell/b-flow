import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './head/head.component';
import { FootComponent } from './foot/foot.component';
import { HomeComponent } from './home/home.component';
import { SearchbarComponent } from './head/searchbar/searchbar.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
    HeadComponent, 
    FootComponent, 
    HomeComponent,
    SearchbarComponent
  ],
  exports: [
    HeadComponent,
    SearchbarComponent,
    FootComponent,
    HomeComponent
  ]
})
export class CoreModule { }
