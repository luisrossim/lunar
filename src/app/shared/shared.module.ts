import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { CarouselModule } from 'primeng/carousel';
import { SkeletonModule } from 'primeng/skeleton';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ReactiveFormsModule,
    AnimateOnScrollModule,
    CarouselModule,
    SkeletonModule,
    InputTextModule,
    RadioButtonModule,
    DropdownModule
  ],
})
export class SharedModule { }
