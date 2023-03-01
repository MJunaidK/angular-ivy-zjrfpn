import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './shared/product-list/product-list.component';
import { AboutUsComponent } from './shared/about-us/about-us.component';
import { GetStartedComponent } from './shared/get-started/get-started.component';
import { SwiperModule } from 'swiper/angular';
@NgModule({
  imports: [CommonModule, SwiperModule],
  declarations: [ProductListComponent, AboutUsComponent, GetStartedComponent],
})
export class LazyModule {}
