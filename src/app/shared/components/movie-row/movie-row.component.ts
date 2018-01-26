import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Movie } from './../../models/movie.model';

@Component({
    selector: 'app-movie-row',
    templateUrl: './movie-row.component.html',
})
export class MovieRowComponent implements OnInit, OnChanges {
    
    @Input() movieRow: Movie;
    @Input() selectedAny;
    
    @Output() onVoted = new EventEmitter<boolean>();
    @Input() selectedAll: boolean;
    @Input() deselectAll: boolean;

    

    private movies: Movie[] = [];
    private voted = false;
    private isSelected: number;
    
    

    constructor() { }

   public ngOnInit() {
    }
    public ngOnChanges(changes) {
        if (this.selectedAny === false) {
            this.voted = this.selectedAll;
        }
    }


    public addMovie(agreed: boolean) {
        this.onVoted.emit(agreed);
        this.voted = true;
    }


}
