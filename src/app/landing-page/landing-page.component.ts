import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  Compiler,
} from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  @ViewChild('productListcontainer', { read: ViewContainerRef })
  productListcontainer: ViewContainerRef;
  @ViewChild('getStartedcontainer', { read: ViewContainerRef })
  getStartedcontainer: ViewContainerRef;
  @ViewChild('aboutContainer', { read: ViewContainerRef })
  aboutContainer: ViewContainerRef;
  public productListRendered = false;
  public getStartedRendered = false;
  public aboutRendered = false;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private compiler: Compiler
  ) {}

  public handleScroll(event) {
    const scrollPosition =
      event.target.scrollTop + event.target.clientHeight + 50;
    const productListContainerPos =
      this.productListcontainer.element.nativeElement.offsetTop;

    if (
      !this.productListRendered &&
      scrollPosition >= productListContainerPos
    ) {
      this.productListRendered = true;
      this.loadProductListContainer();
    }

    const getStartedPos =
      this.getStartedcontainer.element.nativeElement.offsetTop;

    if (!this.getStartedRendered && scrollPosition >= getStartedPos) {
      this.getStartedRendered = true;
      this.loadGetStartedContainer();
    }

    const aboutContainerPos =
      this.aboutContainer.element.nativeElement.offsetTop;

    if (!this.aboutRendered && scrollPosition >= aboutContainerPos) {
      this.aboutRendered = true;
      this.loadAboutContainer();
    }
  }

  private loadProductListContainer() {
    import('../lazy.module').then(({ LazyModule }) => {
      const factory: any = this.compiler
        .compileModuleAndAllComponentsSync(LazyModule)
        .componentFactories.find(
          (f) => f.componentType.name == 'ProductListComponent'
        );
      console.log(factory);
      const { instance } = this.productListcontainer.createComponent(factory);
    });
  }

  private loadGetStartedContainer() {
    import('../shared/get-started/get-started.component').then(
      ({ GetStartedComponent }) => {
        const componentFactory =
          this.componentFactoryResolver.resolveComponentFactory(
            GetStartedComponent
          );
        const { instance } =
          this.getStartedcontainer.createComponent(componentFactory);
      }
    );
  }

  private loadAboutContainer() {
    import('../shared/about-us/about-us.component').then(
      ({ AboutUsComponent }) => {
        const componentFactory =
          this.componentFactoryResolver.resolveComponentFactory(
            AboutUsComponent
          );
        const { instance } =
          this.aboutContainer.createComponent(componentFactory);
      }
    );
  }
}
