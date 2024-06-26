import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './heroes/components/list/list.component';
import { counterModule } from './counter/components/counter/counter.module';
import { HeroModule } from './heroes/hero/hero.module';
import { ListModule } from './heroes/components/list/list.module';


@NgModule({
  declarations: [
    AppComponent,
  //  ListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    counterModule,
    HeroModule,
    ListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
