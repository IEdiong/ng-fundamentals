import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { DirectiveComponent } from './directive/directive.component';
import { TopicsService } from './topics.service';

@NgModule({
  declarations: [AppComponent, BindingComponent, DirectiveComponent],
  imports: [BrowserModule],
  providers: [TopicsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
