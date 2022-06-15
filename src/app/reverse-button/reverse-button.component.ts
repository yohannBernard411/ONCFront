import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reverse-button',
  templateUrl: './reverse-button.component.html',
  styleUrls: ['./reverse-button.component.scss']
})
export class ReverseButtonComponent implements OnInit {

  @Input() frontText = '';
  @Input() backText = '';
  @Input() link = ''; 

  constructor() { }

  ngOnInit(): void {
  }

}
