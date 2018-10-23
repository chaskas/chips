import { Component, Input } from '@angular/core';
import { Chip } from './chip';
import { ChipsDataService } from './chips-data.service';

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
    this.chipsDataService.addChip(this.newChip);
    this.newChip = new Chip();
  }

  removeChip(chip) {
    this.chipsDataService.deleteChipById(chip.id);
  }

  get chips() {
    return this.chipsDataService.getAllChips();
  }


}
