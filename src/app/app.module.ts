import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NestedMenuComponent } from './nested-menu/nested-menu.component';
import { ChildNodeComponent } from './nested-menu/child-node/child-node.component';
import { AlertManagerComponent } from './components/alert-manager/alert-manager.component';
import { HomeComponent } from './components/home/home.component';
import { AlertManagerContentComponent } from './components/alert-manager-content/alert-manager-content.component';

@NgModule({
  declarations: [
    AppComponent,
    NestedMenuComponent,
    ChildNodeComponent,
    AlertManagerComponent,
    HomeComponent,
    AlertManagerContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
