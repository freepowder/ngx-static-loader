import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'arf-code-usage',
  templateUrl: './code-usage.component.html',
  styleUrls: ['./code-usage.component.css']
})
export class CodeUsageComponent implements OnInit {
  @Input() code: string;
  constructor() { }

  ngOnInit() {
  }

}
