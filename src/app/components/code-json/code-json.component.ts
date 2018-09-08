import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'arf-code-json',
  templateUrl: './code-json.component.html',
  styleUrls: ['./code-json.component.css']
})
export class CodeJsonComponent implements OnInit {
  jsonEx = environment.jsonEx;
  constructor() { }

  ngOnInit() {
  }

}
