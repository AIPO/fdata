import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {CategoryComponent} from './category/category.component';

@NgModule({
    declarations: [
        AppComponent,
        CategoryComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent, CategoryComponent]
})
export class AppModule {
}
