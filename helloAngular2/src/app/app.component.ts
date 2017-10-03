import { Component } from '@angular/core'; //<-- Import component decorator

@Component({ //<-- Decorator
  selector: 'app-root',                   //
  templateUrl: './app.component.html',    // Metadata
  styleUrls: ['./app.component.css']      //
})
export class AppComponent { // <-- exporting component class
  title = 'Angular2 - 4';
}
