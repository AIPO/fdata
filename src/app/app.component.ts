import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  results: string[];
    // Inject HttpClient into your component or service.
    constructor(private http: HttpClient) {}
}
