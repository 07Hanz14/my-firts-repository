import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// routes
import { APP_ROUTING } from './app.routes';

// services
import { SpacecraftsService } from './services/spacecrafts.service';


// components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SideBarComponent } from './components/shared/side-bar/side-bar.component';
import { SpacecraftsComponent } from './components/spacecrafts/spacecrafts.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SideBarComponent,
    SpacecraftsComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    SpacecraftsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
