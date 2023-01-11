# Weather-Tracking-API

```http
If today is prime day then data will not show..so go to -> controller -> line 14 make checkPrimeCondition = false
```

## Environment Variables

`API_KEY = "Your open weather api key"`

`MONGODB_URI = "mongodb://127.0.0.1"`

## API Reference

#### [GET] default Message - Welcome to Weather tracking API

```
http://127.0.0.1:5000/
```

#### [GET] Default city weather details (Gandhinagar)

```
http://127.0.0.1:5000/city/
```

#### [GET] Selected city weather details

##### just enter city name like pune

```
http://127.0.0.1:5000/city/pune
```

#### Database Schema
There is only 1 schema - ``Audit``
