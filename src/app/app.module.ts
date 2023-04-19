import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { BrandingColumnComponent } from './home-page/branding-column/branding-column.component';
import { CollectionSectionComponent } from './home-page/collection-section/collection-section.component';
import { FeaturedProductsSectionComponent } from './home-page/featured-products-section/featured-products-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MainNavbarComponent,
    BrandingColumnComponent,
    CollectionSectionComponent,
    FeaturedProductsSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
