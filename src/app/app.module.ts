import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ArtistItemsComponent } from './artist-items/artist-items.component';
import { SerachArtistsPipe } from './serach-artists.pipe';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistItemsComponent,
    SerachArtistsPipe,
    ArtistDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
