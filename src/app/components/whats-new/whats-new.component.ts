import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whats-new',
  templateUrl: './whats-new.component.html',
  styleUrls: ['./whats-new.component.css']
})
export class WhatsNewComponent implements OnInit {
  showOverlay: boolean;

  constructor() { }

  ngOnInit(): void {
    if (!window.localStorage.getItem('patchNotesShown')) {
      this.showOverlay = true;
    }
  }

  hideModal(): void {
    this.showOverlay = false;
    window.localStorage.setItem('patchNotesShown', 'true');
  }
}
