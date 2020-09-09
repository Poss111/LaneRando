import { Component, OnInit } from '@angular/core';
import { LeagueVersionsService } from '../../services/league-versions.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  version: string;

  constructor(private leagueVersionsService: LeagueVersionsService) { }

  ngOnInit(): void {
    this.leagueVersionsService.getLeagueVersions().subscribe(value => {
      this.version = value[0];
    });
  }

}
