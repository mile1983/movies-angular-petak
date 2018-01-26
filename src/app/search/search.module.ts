import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SearchInputComponent } from '../components/search-input/search-input.component';
import { FormsModule } from '@angular/forms';
import { SearchPageComponent } from '../components/search-page/search-page.component';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        FormsModule

    ],
    declarations: [
        SearchInputComponent,
        SearchPageComponent

    ],
    exports: [
        SearchInputComponent,
        SearchPageComponent

    ]
})
export class SearchModule { }
