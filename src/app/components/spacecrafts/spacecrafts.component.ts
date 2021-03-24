import { Component, OnInit } from '@angular/core';
import { SpacecraftsService, Craft } from '../../services/spacecrafts.service';


@Component({
  selector: 'app-spacecrafts',
  templateUrl: './spacecrafts.component.html',
  styleUrls: ['./spacecrafts.component.css']
})


export class SpacecraftsComponent implements OnInit {

  crafts:Craft[] = [];

  constructor(private _spacecraftsService: SpacecraftsService) { }

  ngOnInit(): void {

    this.crafts = this._spacecraftsService.getCrafts();
    console.log(this.crafts);

  }

}
