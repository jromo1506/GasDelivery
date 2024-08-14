import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListComponent } from './components/list/list.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeMenuComponent } from './pages/home-menu/home-menu.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { PendingDeliveryComponent } from './pages/pending-delivery/pending-delivery.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';

const routes:Routes = [
  {path:'',component:LoginComponent},
  {path:'MainMenu',component:HomeMenuComponent},
  {path:'Delivery',component:DeliveryComponent},
  {path:'PendingDelivery',component:PendingDeliveryComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ListComponent,
    HomeMenuComponent,
    PendingDeliveryComponent,
    CarrouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
