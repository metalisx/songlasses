import { Injectable } from '@angular/core';
import { Superhero } from '../models/superhero.model';
import { SUPERHEROES } from '../mocks/mock-superheroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperheroesService {

  constructor() { }

  getSuperheroes(): Observable<Superhero[]> {
    return of(SUPERHEROES);
  }

}
