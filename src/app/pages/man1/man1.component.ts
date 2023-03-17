import { Component } from '@angular/core';

@Component({
  selector: 'app-man1',
  templateUrl: './man1.component.html',
  styleUrls: ['./man1.component.scss']
})
export class Man1Component {

  reload() {
    location.reload()
  }
}
