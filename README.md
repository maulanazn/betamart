<center><h1>BetaMart</h1></center>

Is an UMKM store that sell daily products to its consumers

### API SPECIFICATION

#### REGISTER
/register

> body:
> - username
> - password
>
> response:
> - status: 201
> - message: Success Register

#### LOGIN
/login

> body:
> - username
> - password
>
> response:
> - status: 201
> - message: Success Login
> - access_token: token

#### POST PRODUCT
/product

> body:
> - name
> - stock
> - category
> - price
>
> response:
> - status: 200
> - message: Success Add product
>
> header:
> - Set-Cookie:
>
>> - USR_ID=integer; PRD_ID=integer;

#### POST PRODUCT TO RACK
/rack/product

> body:
> - stock
>
> response:
> - status: 200
> - message: Success Add product
>
> header:
> - Cookie:
>
>> - USR_ID=integer; PRD_ID=integer;

#### PAY PRODUCT
/pay/product

> body:
> - product_id
> - quantity
>
> response:
> - status: 200
> - message: Success Pay product
>
> header:
> - Set-Cookie:
>
>> - PYM_PRD_ID=integer;
> - Cookie:
>
>> - USR_ID=integer; PRD_ID=integer;

#### GET
/product/?stock=int&rack=string&price=int

> response:
> - status: 200
> - message: Success
> - data: {
> 
>   name: string,
>
>   stock: int,
>
>   category: string,
>
>   rack: string,
>
>   price: int
> - }
>
> header:
> - Cookie:
>
>> - USR_ID=integer;