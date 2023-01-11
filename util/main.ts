export class Main {

    protected _temp: number
    protected _feels_like: number
    protected _temp_min: number
    protected _temp_max: number
    protected _pressure: number
    protected _humidity: number

    constructor(temp: number, feels_like: number, temp_min: number, temp_max: number, pressure: number, humidity: number) {
        this._temp = temp;
        this._feels_like = feels_like;
        this._temp_min = temp_min;
        this._temp_max = temp_max;
        this._pressure = pressure;
        this._humidity = humidity;
    }

    get temp(): number {
        return this._temp;
    }

    set temp(value: number) {
        this._temp = value;
    }

    get feels_like(): number {
        return this._feels_like;
    }

    set feels_like(value: number) {
        this._feels_like = value;
    }

    get temp_min(): number {
        return this._temp_min;
    }

    set temp_min(value: number) {
        this._temp_min = value;
    }

    get temp_max(): number {
        return this._temp_max;
    }

    set temp_max(value: number) {
        this._temp_max = value;
    }

    get pressure(): number {
        return this._pressure;
    }

    set pressure(value: number) {
        this._pressure = value;
    }

    get humidity(): number {
        return this._humidity;
    }

    set humidity(value: number) {
        this._humidity = value;
    }
}