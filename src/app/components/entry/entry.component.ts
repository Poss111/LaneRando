import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NamesService} from '../../services/names.service';
import {LeagueVersionsService} from '../../services/league-versions.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  name1: string;
  name2: string;
  name3: string;
  name4: string;
  name5: string;
  names: string[] = [];
  disabled = true;
  setOfNames: string[];

  constructor(
    private route: ActivatedRoute, private nameService: NamesService, private leagueVersionsService: LeagueVersionsService) {
  }

  ngOnInit(): void {
    this.setOfNames = Array.from(this.nameService.retrieveSetOfNames());
    this.leagueVersionsService.getLeagueVersions().subscribe((value) => {
      console.log(value);
    });
  }

  clicked(): void {
    this.names.push(this.name1.trim(), this.name2.trim(), this.name3.trim(), this.name4.trim(), this.name5.trim());
    this.nameService.persistNames(this.names);
  }

  inputUpdate(): void {
    this.disabled = !(this.name1 &&
      this.name2 &&
      this.name3 &&
      this.name4 &&
      this.name5);
  }

  populateSuggestedName(suggestedName: string): void {
    if (!this.name1) {
      this.name1 = suggestedName;
    } else if (!this.name2) {
      this.name2 = suggestedName;
    } else if (!this.name3) {
      this.name3 = suggestedName;
    } else if (!this.name4) {
      this.name4 = suggestedName;
    } else if (!this.name5) {
      this.name5 = suggestedName;
    }
    this.inputUpdate();
  }
}
