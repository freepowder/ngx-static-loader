import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'arf-code-add',
  templateUrl: './code-add.component.html',
  styleUrls: ['./code-add.component.css']
})
export class CodeAddComponent implements OnInit {
module = environment.addModule;
  constructor() { }

  ngOnInit() {
  }

}
