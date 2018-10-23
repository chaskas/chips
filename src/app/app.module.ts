import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChipsDataService } from './shared/chips-data.service';

import { DragulaModule } from 'ng2-dragula';
import { ChipableComponent } from './chipable/chipable.component';

@NgModule({
  declarations: [
    AppComponent,
    ChipableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DragulaModule.forRoot()
  ],
  providers: [ChipsDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
