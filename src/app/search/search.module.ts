import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SearchInputComponent } from '../components/search-input/search-input.component';


@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [
        SearchInputComponent
    ],
    exports: [
        SearchInputComponent
    ]
})
export class SearchModule { }
