import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({ //<-- decorator
  declarations: [ //<-- declaring all the components
    AppComponent
  ],
  imports: [ //<-- Import Modules
    BrowserModule
  ],
  providers: [], // <-- Providers Service to all module's component.
  bootstrap: [AppComponent]
})
export class AppModule { }
