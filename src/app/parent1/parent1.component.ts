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
    this.route.params.subscribe(({ id, name }) => {
      this.user = { id, name };
      console.log('Fired from parent1');
    });
  }
}
