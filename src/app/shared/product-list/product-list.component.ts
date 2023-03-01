import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import SwiperCore, { Navigation, SwiperOptions } from 'swiper';
import { ProductListService } from '../../product-list.service';

SwiperCore.use([Navigation]);

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products: any[] = [];
  isLoading: boolean;

  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: true,
    pagination: false,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      '0': {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      '767': {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      '992': {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  };

  constructor(
    private router: Router,
    private productListService: ProductListService
  ) {
    this.getProducts();
  }

  goToProductDetails(productId: any) {
    this.router.navigate(['/productDetails', productId]);
  }

  getProducts() {
    this.isLoading = true;
    this.productListService.getProductList().subscribe((res: any) => {
      this.isLoading = false;
      this.products = res;
    });
  }
}
