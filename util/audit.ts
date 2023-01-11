import {Coord} from "./coord";
import {Weather} from "./weather";
import {Main} from "./main";
import {Wind} from "./wind";
import {Clouds} from "./clouds";
import {Sys} from "./sys";

export class Audit {

    private _coord: Coord | undefined
    private _weather: [Weather] | undefined
    private _base: string | undefined
    private _main: Main | undefined
    private _visibility: number | undefined
    private _wind: Wind | undefined
    private _clouds: Clouds | undefined
    private _dt: number | undefined
    private _sys: Sys | undefined
    private _timezone: number | undefined
    private _id: number | undefined
    private _name: string | undefined
    private _cod: number | undefined

    get coord(): Coord | undefined {
        return this._coord;
    }

    set coord(value: Coord | undefined) {
        this._coord = value;
    }

    get weather(): [Weather] | undefined {
        return this._weather;
    }

    set weather(value: [Weather] | undefined) {
        this._weather = value;
    }

    get base(): string | undefined {
        return this._base;
    }

    set base(value: string | undefined) {
        this._base = value;
    }

    get main(): Main | undefined {
        return this._main;
    }

    set main(value: Main | undefined) {
        this._main = value;
    }

    get visibility(): number | undefined {
        return this._visibility;
    }

    set visibility(value: number | undefined) {
        this._visibility = value;
    }

    get wind(): Wind | undefined {
        return this._wind;
    }

    set wind(value: Wind | undefined) {
        this._wind = value;
    }

    get clouds(): Clouds | undefined {
        return this._clouds;
    }

    set clouds(value: Clouds | undefined) {
        this._clouds = value;
    }

    get dt(): number | undefined {
        return this._dt;
    }

    set dt(value: number | undefined) {
        this._dt = value;
    }

    get sys(): Sys | undefined {
        return this._sys;
    }

    set sys(value: Sys | undefined) {
        this._sys = value;
    }

    get timezone(): number | undefined {
        return this._timezone;
    }

    set timezone(value: number | undefined) {
        this._timezone = value;
    }

    get id(): number | undefined {
        return this._id;
    }

    set id(value: number | undefined) {
        this._id = value;
    }

    get name(): string | undefined {
        return this._name;
    }

    set name(value: string | undefined) {
        this._name = value;
    }

    get cod(): number | undefined {
        return this._cod;
    }

    set cod(value: number | undefined) {
        this._cod = value;
    }

    static setAll(value: undefined) {

    }
}