import { NgModule } from '@angular/core';
import { SedBlockAssembleComponent } from './sed-block-assemble.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [SedBlockAssembleComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [SedBlockAssembleComponent]
})
export class SedBlockAssembleModule { }
