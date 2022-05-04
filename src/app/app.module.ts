import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DemoTailwindComponent } from './demo-tailwind/demo-tailwind.component';
import { FacebookCloneComponent } from './facebook-clone/facebook-clone.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    DemoTailwindComponent,
    FacebookCloneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
