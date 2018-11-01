import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';



const MATERIAL_MODULES = [
  MatButtonModule,
  MatInputModule,
  MatListModule,
  MatSortModule,
  MatPaginatorModule,
  MatChipsModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatButtonToggleModule,
  MatBottomSheetModule
];

@NgModule({
  imports: [
    CommonModule,
    MATERIAL_MODULES
  ],
  exports: [
    MATERIAL_MODULES
  ]
})

export class MaterialModule { }
