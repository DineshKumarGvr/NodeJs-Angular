import { Component, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Http } from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'dinesh';
  greeting = 'Hello';
  subscription: Subscription;
  constructor(private http: HttpClient) {
    this.http.get('http://localhost:4200/home').subscribe((response) => {
      console.log(response);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
