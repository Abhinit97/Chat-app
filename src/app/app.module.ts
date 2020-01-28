import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RamComponent } from './ram/ram.component';
import { ShyamComponent } from './shyam/shyam.component';
import { ChatService } from './chat.service';
import { GhanshyamComponent } from './ghanshyam/ghanshyam.component';

@NgModule({
  declarations: [
    AppComponent,
    RamComponent,
    ShyamComponent,
    GhanshyamComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
