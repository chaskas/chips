import {Injectable} from '@angular/core';
import {Chip} from './chip';

@Injectable()
export class ChipsDataService {

  lastId = 0;

  chips: Chip[] = [];

  constructor() {
  }

  addChip(chip: Chip): ChipsDataService {
    if (!chip.id) {
      chip.id = ++this.lastId;
    }
    this.chips.push(chip);
    return this;
  }

  deleteChipById(id: number): ChipsDataService {
    this.chips = this.chips
      .filter(chip => chip.id !== id);
    return this;
  }

  getAllChips(): Chip[] {
    return this.chips;
  }

  getChipById(id: number): Chip {
    return this.chips
      .filter(chip => chip.id === id)
      .pop();
  }

}
