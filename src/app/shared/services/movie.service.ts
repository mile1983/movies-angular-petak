import { Injectable } from '@angular/core';
import { Movie } from './../models/movie.model';
import { movieList } from '../database/examples';
import { Observable, Observer } from 'rxjs/Rx';

@Injectable()
export class MovieService {

    private movieList: Movie[];
    
    constructor() {
        this.movieList = movieList.map((movie) => {
            return new Movie(
                movie.id,
                movie.name,
                movie.director,
                movie.imageUrl,
                movie.duration,
                new Date(movie.releseDate),
                movie.genres
            );
        });
    }

    public getMovies(): Observable<Movie[]> {
        return Observable.of(this.movieList);
    }
    searchMoviesByTerm(term): Observable<Movie[]> {
        const foundMovies = this.movieList.filter((movie: Movie) => {
            return movie.name.toLocaleLowerCase().includes(term.toLocaleLowerCase());
        });

        if (foundMovies.length === 0) {
            return Observable.throw(term);
        }
        return Observable.of(foundMovies);
    }



}
