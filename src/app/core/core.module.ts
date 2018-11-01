import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './head/head.component';
import { FootComponent } from './foot/foot.component';
import { HomeComponent } from './home/home.component';
import { SearchbarComponent } from './head/searchbar/searchbar.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store'

import { reducers, effects } from '../store/';
import { SharedModule } from '../shared/shared.module';
import * as fromService from '../shared/services';
import { PagingComponent } from './home/paging/paging.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    SharedModule,
    StoreModule.forFeature('reddit', reducers),
    EffectsModule.forFeature(effects),
  ],
  declarations: [
    HeadComponent, 
    FootComponent, 
    HomeComponent,
    SearchbarComponent,
    PagingComponent
  ],
  exports: [
    HeadComponent,
    SearchbarComponent,
    FootComponent,
    HomeComponent
  ],
  providers: [
    ...fromService.services
  ]
})
export class CoreModule { }
