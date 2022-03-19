import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { CharizardComponent } from './charizard/charizard/charizard.component';
import { FatherSonComponent } from './father-son/father-son.component';
import { FatherComponent } from './father/father.component';

@NgModule({
  declarations: [CounterComponent, CharizardComponent, FatherSonComponent, FatherComponent],
  imports: [CommonModule],
})
export class BasicModule {}
