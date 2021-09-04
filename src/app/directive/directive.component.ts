import { Component, OnInit } from '@angular/core';
import { AnimalsService } from '../animals.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css'],
})
export class DirectiveComponent implements OnInit {
  constructor(public counter: CounterService, public emojis: AnimalsService) {}

  ngOnInit(): void {}
}
