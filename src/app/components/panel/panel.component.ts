import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'arf-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
