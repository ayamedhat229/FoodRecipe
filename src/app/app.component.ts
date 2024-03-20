import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'foodApp';
  constructor(private _spinner: NgxSpinnerService) {}

  ngOnInit() {
    /** spinner starts on init */
    this._spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this._spinner.hide();
    }, 4000);
  }
}
