import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  private loadingRequest: boolean = false;

  constructor() { }

  setLoading(x: boolean) {
    this.loadingRequest = x;
  }
  getLoading(): boolean {
    return this.loadingRequest;
  }
}
