import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductListService } from '../product-list.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  productId: any;
  isLoading: boolean;

  constructor(
    private route: ActivatedRoute,
    private productListService: ProductListService
  ) {
    this.route.params.subscribe((param: Params) => {
      if (param.id) {
        this.productId = param.id;
      }
    });
  }

  ngOnInit() {
    this.getProductDetails();
  }

  getProductDetails() {
    this.isLoading = true;
    this.productListService.getProduct(this.productId).subscribe((p: any) => {
      this.product = p;
      this.isLoading = false;
    });
  }
}
