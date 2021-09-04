import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';
import { TopicsService } from '../topics.service';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css'],
})
export class BindingComponent implements OnInit {
  constructor(public topics: TopicsService, public counter: CounterService) {}

  ngOnInit(): void {}
}
