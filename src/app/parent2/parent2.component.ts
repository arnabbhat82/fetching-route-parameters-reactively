import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.scss'],
})
export class Parent2Component implements OnInit {
  constructor(private route: ActivatedRoute) {}
  pro: { pid: number; pname: string };

  ngOnInit() {
    this.pro = {
      // tslint:disable-next-line: no-string-literal
      pid: this.route.snapshot.params['pid'],
      // tslint:disable-next-line: no-string-literal
      pname: this.route.snapshot.params['pname'],
    };
    console.log('Fired from parent 2');
  }
}
