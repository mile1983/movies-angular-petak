import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../shared/services/movie.service';
import { Movie } from '../../shared/models/movie.model';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
})
export class MoviesComponent implements OnInit {

    private movies: Movie[] = [];
    public counter = 0;
    public selectedAll = false;
    public selectedAny = false;
    public order = 'name';
    public reverse = false;



    

    constructor(private movieService: MovieService) { }

    public ngOnInit() {
        this.movieService.getMovies().subscribe(data => {
            this.movies = data;
            console.log(data);
        });
    }
    public onVoted(agreed: boolean) {
        this.counter++;
        this.selectedAny = true;
    }

    public selectAllCounter() {
        this.counter = this.movies.length;
    }

    public deselectAllCounter() {
        this.counter = 0;

    }
    public setOrder(value: string) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    }


}

