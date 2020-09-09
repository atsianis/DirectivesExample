import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  isOn: boolean = true;
  clicks: number[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  onToggleDisplay($event){
    this.isOn = !this.isOn;
    this.clicks.push($event.timeStamp);
  }

}
