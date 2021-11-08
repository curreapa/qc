import { Injectable } from "@angular/core";
import { HammerGestureConfig } from "@angular/platform-browser";
import * as hammer from "hammerjs";

@Injectable({providedIn: 'root'})
export class MyHammerConfig extends HammerGestureConfig{
    overrides = <any>{
        'swipe': {direction: hammer.DIRECTION_ALL},
        pinch:{enable: false},
        rotate:{enable: false}
    }
}