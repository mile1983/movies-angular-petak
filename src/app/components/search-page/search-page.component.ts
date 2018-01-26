import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../shared/services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../../shared/models/movie.model';

@Component({
    selector: 'app-search-page',
    templateUrl: './search-page.component.html'
})
export class SearchPageComponent implements OnInit 
{

    public movies: Movie[];
    public term;



    constructor(private movieService: MovieService,
        private route: ActivatedRoute,
        private router: Router,
    ) 
    {

     }

    ngOnInit() {
        let term = this.route.snapshot.paramMap.get('term');
        this.movieService.searchMoviesByTerm(term).subscribe(data => {
            this.movies = data;
            this.term = term;
        }, (term) => {
            alert('There are no movies with searched term: ' + term);
            this.router.navigate(['movies']);
        });

    }
}