import { Component } from '@angular/core';
import { UtilitiesService } from './services/utilities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lunar';
  loading = this.utilities.getLoading();

  constructor(public utilities: UtilitiesService) {}

  ngAfterContentChecked(): void {
    this.loading = this.utilities.getLoading();
  }

}
