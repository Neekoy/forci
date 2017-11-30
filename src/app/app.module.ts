import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomepageSubheaderComponent } from './components/homepage-subheader/homepage-subheader.component';
import { HomepageHeaderComponent } from './components/homepage-header/homepage-header.component';
import { HomepageMainComponent } from './components/homepage-main/homepage-main.component';
import { HomepageCardsComponent } from './components/homepage-cards/homepage-cards.component';
import { HomepageContactComponent } from './components/homepage-contact/homepage-contact.component';
import { HomepageFooterComponent } from './components/homepage-footer/homepage-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageSubheaderComponent,
    HomepageHeaderComponent,
    HomepageMainComponent,
    HomepageCardsComponent,
    HomepageContactComponent,
    HomepageFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
