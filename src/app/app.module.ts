import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DefaultSchematicComponent } from './sub-folder/default-schematic/default-schematic.component';
import { CustomSchematicComponent } from './custom-schematic/custom-schematic.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultSchematicComponent,
    CustomSchematicComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
