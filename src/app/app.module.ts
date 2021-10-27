import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PrebootModule } from 'preboot';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    PrebootModule.withConfig({ appRoot: 'app-root' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
