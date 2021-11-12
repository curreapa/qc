import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './components/player/player.component';
import { UiTtComponent } from './components/ui-tt/ui-tt.component';
import { MyHammerConfig } from './my-hammer.config';
import { InView } from './services/InView.directive';
import { MutedDirective } from './services/muted.directive';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    UiTtComponent, InView, MutedDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HammerModule,
    HttpClientModule
  ],
  providers: [{
    provide:HAMMER_GESTURE_CONFIG,
    useClass:MyHammerConfig

  }, { provide: LocationStrategy, useClass: HashLocationStrategy }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
