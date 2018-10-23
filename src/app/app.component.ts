import { Component, Input } from '@angular/core';
import { Chip } from './shared/chip';
import { ChipsDataService } from './shared/chips-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor (
    private chipsDataService: ChipsDataService
  ) { }

  newChip: Chip = new Chip();

  addChip() {
    if (this.newChip.name !== undefined) {
      this.chipsDataService.addChip(this.newChip);
      this.newChip = new Chip();
    }
  }

  get chips() {
    return this.chipsDataService.getAllChips();
  }

}
