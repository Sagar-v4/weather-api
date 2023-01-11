export class Wind {

    protected _speed: number
    protected _deg: number

    constructor(speed: number, deg: number) {
        this._speed = speed;
        this._deg = deg;
    }

    get speed(): number {
        return this._speed;
    }

    set speed(value: number) {
        this._speed = value;
    }

    get deg(): number {
        return this._deg;
    }

    set deg(value: number) {
        this._deg = value;
    }
}