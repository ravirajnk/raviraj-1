import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { HttpModule } from "@angular/http";
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';

import { FirstComponent } from "./app.component";
import { FooterComponent } from "./footer/footer.component";
import { MobPartsComponent } from "./mob-parts/mob-parts.component";
import { Banner3Component } from "./banner3/banner3.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { Banner2Component } from "./banner2/banner2.component";
import { ProductsComponent } from "./products/products.component";
import { Banner1Component } from "./banner1/banner1.component";
import { NavComponent } from "./nav/nav.component";
import { SqrtPipe } from "./sqrt.pipe";
import { ProdTwoComponent } from "./prod-two/prod-two.component";
import { ProdOneComponent } from "./prod-one/prod-one.component";
import { MobDataService } from "./mob-data.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const appRoutes: Routes = [
  { path: "mobile", component: MobPartsComponent },
  { path: "productOne", component: ProdOneComponent },
  { path: "productTwo", component: ProdTwoComponent }
];
@NgModule({
  declarations: [
    FirstComponent,
    FooterComponent,
    MobPartsComponent,
    Banner3Component,
    ContactUsComponent,
    Banner2Component,
    ProductsComponent,
    Banner1Component,
    NavComponent,
    SqrtPipe,
    ProdTwoComponent,
    ProdOneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  bootstrap: [FirstComponent],
  providers: [MobDataService]
})
export class FirstModule {}
