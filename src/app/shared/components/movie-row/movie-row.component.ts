import { Component, OnInit, Input } from '@angular/core';
import { Movie } from './../../models/movie.model';

@Component({
    selector: 'app-movie-row',
    templateUrl: './movie-row.component.html',
})
export class MovieRowComponent implements OnInit {

    @Input() movieRow: Movie;

    private movies: Movie[] = [];

    constructor() { }

    ngOnInit() {
    }

}
