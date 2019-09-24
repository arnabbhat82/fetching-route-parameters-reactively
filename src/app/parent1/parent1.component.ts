import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.scss'],
})
export class Parent1Component implements OnInit {
  constructor(private route: ActivatedRoute) {}
  user: { id: number; name: string };

  ngOnInit() {
    console.log('arnab');
    this.route.params.subscribe((params: Params) => {
      // tslint:disable-next-line: no-string-literal
      this.user.id = params['id'];
      // tslint:disable-next-line: no-string-literal
      this.user.name = params['name'];
    });
  }
}
