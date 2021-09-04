import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TopicsService {
  ngTopics = {
    interpolation: 'string interpolation in angular',
    property: 'property binding in angular',
  };
}
