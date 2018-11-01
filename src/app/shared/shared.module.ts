import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePipe } from './pipes/image.pipe';
import { DatePipe } from './pipes/date.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [ImagePipe, DatePipe],
  exports: [ImagePipe, DatePipe]
})
export class SharedModule { }
