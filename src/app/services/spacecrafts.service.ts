import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})


export class SpacecraftsService {
    
  // necesary objects
  private spacecrafts:Craft[] = [

    {
      name: 'Soyuz',
      description: "Soyuz's spacecraft is the older's one that is still working nowaday",
      img: './assets/img/soyuz.jpg',
      date: '1960 - 2021',
      agency: 'Roscosmos'
    },

    {
      name: 'enterprise',
      description: "the interprise spaceship was one of the seven spacial transborders that nasa use in its program, however, this craf never flew out side the earth for 2 reasons, it was just a simulator and the transborders nasa's program ended on 2010 when Culombian landed for the last time.",
      img: './assets/img/enterprise.jfif',
      date: '1977 - 1985',
      agency: 'Nasa'
    }

  ];


    constructor() { 
        console.log("hey i'm a service")
    }


    getCrafts(){
        return this.spacecrafts;
    }

}

export interface Craft{
    name: string;
    description: string;
    img: string;
    date: string;
    agency: string;
}
