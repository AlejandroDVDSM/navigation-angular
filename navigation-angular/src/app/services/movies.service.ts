import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface Movie {
  id: number
  name: string
  release: string
  runningTime: string
  director: string
  scriptwriter: string
  imdbRating: number
  metascoreRating: number
}

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  constructor() { }

  MOVIES: Movie[] = [
    {id: 1, name: 'The Pianist', release: '2002', runningTime: '2h 30min', director: 'Roman Polanski', scriptwriter: 'Ronald Harwood', imdbRating: 8.6, metascoreRating: 85},
    {id: 2, name: 'Memento', release: '2000', runningTime: '1h 53min', director: 'Christopher Nolan', scriptwriter: 'Christopher Nolan', imdbRating: 8.0, metascoreRating: 80},
    {id: 3, name: 'Goodfellas', release: '1990', runningTime: '2h 26min', director: 'Martin Scorcese', scriptwriter: 'Nicholas Pileggi', imdbRating: 8.7, metascoreRating: 90},
    {id: 4, name: 'Shutter Island', release: '2010', runningTime: '2h 18min', director: 'Martin Scorcese', scriptwriter: 'Laeta Kalogridis', imdbRating: 8.2, metascoreRating: 63},
    {id: 5, name: 'Get Out', release: '2017', runningTime: '1h 44min', director: 'Jordan Pelee', scriptwriter: 'Jordan Pelee', imdbRating: 7.7, metascoreRating: 85},
    {id: 6, name: 'The Road', release: '2009', runningTime: '1h 51min', director: 'John Hillcoat', scriptwriter: 'Joe Penhall', imdbRating: 7.2, metascoreRating: 64},
    {id: 7, name: 'Prisoners', release: '2013', runningTime: '2h 33min', director: 'Denis Villeneuve', scriptwriter: 'Aaron Guzikowski', imdbRating: 8.1, metascoreRating: 70},
    {id: 8, name: 'Children of Man', release: '2006', runningTime: '1h 49min', director: 'Alfonso Cuarón', scriptwriter: 'Alfonso Cuarón, Timothy J. Sexton, David Arata', imdbRating: 7.9, metascoreRating: 84},
    {id: 9, name: 'Alien', release: '1979', runningTime: '1h 57min', director: 'Ridley Scott', scriptwriter: "Dan O'Bannon", imdbRating: 8.5, metascoreRating: 89},
    {id: 10, name: 'Parasite', release: '2019', runningTime: '2h 12min', director: 'Bong Joon Ho', scriptwriter: "Han Jin-won", imdbRating: 8.5, metascoreRating: 96}
  ]

  getAllMovies(): Observable<Movie[]> {
    const movies = of(this.MOVIES)
    return movies
  }

  getMovie(id: number): Observable<Movie> {
    const movie = this.MOVIES.find(m => m.id === id)!
    return of(movie)
  }

}
