import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NamesService} from '../../names.service';

@Component({
  selector: 'app-name-suggestion',
  templateUrl: './name-suggestion.component.html',
  styleUrls: ['./name-suggestion.component.css']
})
export class NameSuggestionComponent implements OnInit {
  @Input()
  nameSuggestions: string[] = [];
  showNa = false;
  @Output()
  nameSuggested = new EventEmitter<string>();

  constructor(private namesService: NamesService) { }

  ngOnInit(): void {
    if (!this.nameSuggestions || this.nameSuggestions.length === 0) {
      this.showNa = true;
    } else {
      this.nameSuggestions.sort((a, b) => {
        return a.toLowerCase().localeCompare(b.toLowerCase());
      });
      this.showNa = false;
    }
  }

  clearSuggestions(): void {
    this.nameSuggestions = [];
    this.namesService.clearSetOfNames();
    this.showNa = true;
  }

  clickName(event): void {
    this.nameSuggested.emit(event.target.textContent);
  }
}
