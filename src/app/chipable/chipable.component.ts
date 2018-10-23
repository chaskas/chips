import { Component, OnInit, Input } from '@angular/core';
import { Chip } from '../shared/chip';

import { ChipsDataService } from '../shared/chips-data.service';

@Component({
  selector: 'app-chipable',
  templateUrl: './chipable.component.html',
  styleUrls: ['./chipable.component.css']
})
export class ChipableComponent implements OnInit {

  @Input() chips: Chip[];

  newChip: Chip = new Chip();

  constructor(
    private chipsDataService: ChipsDataService
  ) { }

  ngOnInit() {
    console.log(this.chips);
  }

  removeChip(chip) {
    this.chipsDataService.deleteChipById(chip.id);
  }

}
