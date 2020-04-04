import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListProjectComponent } from './list-project/list-project.component';
import { ListProjectItemComponent } from './list-project-item/list-project-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProjectComponent,
    ListProjectItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
