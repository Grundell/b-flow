import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailedComponent } from './detailed/detailed.component';
import { SingleRoutes } from './single.router'; 
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, effects } from '../store/';
import { MaterialModule } from '../material/material.module';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  imports: [
    CommonModule,
    SingleRoutes,
    MaterialModule,
    StoreModule.forFeature('reddit', reducers),
    EffectsModule.forFeature(effects),
  ],
  declarations: [DetailedComponent, CommentsComponent]
})
export class SingleModule { }
