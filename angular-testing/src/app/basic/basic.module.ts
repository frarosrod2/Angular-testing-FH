import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { CharizardComponent } from './charizard/charizard/charizard.component';

@NgModule({
  declarations: [CounterComponent, CharizardComponent],
  imports: [CommonModule],
})
export class BasicModule {}
