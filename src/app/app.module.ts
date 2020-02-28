import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './commun/menu/menu.component';
import { UneComponent } from './home/une/une.component';
import { GrilleComponent } from './home/grille/grille.component';
import { LastArticleComponent } from './sidebar/last-article/last-article.component';
import { MapComponent } from './sidebar/map/map.component';
import { NewsletterComponent } from './sidebar/newsletter/newsletter.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UneComponent,
    GrilleComponent,
    LastArticleComponent,
    MapComponent,
    NewsletterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
