import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './components/player/player.component';
import { UiTtComponent } from './components/ui-tt/ui-tt.component';
import { MyHammerConfig } from './my-hammer.config';
import { InView } from './services/InView.directive';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    UiTtComponent, InView
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HammerModule
  ],
  providers: [{
    provide:HAMMER_GESTURE_CONFIG,
    useClass:MyHammerConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
