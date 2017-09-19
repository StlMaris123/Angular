// the imports
import { Component, OnInit } from '@angular/core';

// decorator
@component({
    selector: 'app-suggestions',
    templateUrl: './suggestions.component.html',
    styleUrls: ['./suggestions.components.css']

})
export class SuggestionsComponent{
    // initializing an object
    constructor(){

    }
    // function that can be called from the template
    playVideo(video){
        ....
    }
}
