import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpacetoplusService {


  constructor() { }


  public spaceToPlus(text: string): string {
    const result = text.replace(/ /g, '+');
    return result;
  }

}
