import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../shared/services/movie.service';
import { Movie } from '../../shared/models/movie.model';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
})
export class MoviesComponent implements OnInit {

    private movies: Movie[] = [];

    constructor(private movieService: MovieService) { }

    public ngOnInit() {
        this.movieService.getMovies().subscribe(data => {
            this.movies = data;
        });
    }
}

