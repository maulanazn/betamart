<center><h1>JOBLIST</h1></center>

API SPECIFICATION FOR JOBLIST API

### API SPECIFICATION

#### Register
/register

> body:
> - username
> - password
>
> response:
> - status: 201
> - message: Success Register

#### Login
/login

> body:
> - username
> - password
>
> response:
> - status: 202
> - message: Success Login
> - access_token: secret

#### GET ALL
/jobs

> header
> - Authorization
>
>> - Bearer token
>
> parameters:
> - query:
>> - name: search, offset, limit
> - type:
>> - optional
>
> response:
> - status: 200
> - message: Success Getting All Jobs
> - data: [
>
>    {
>
>    id: string,
> 
>    job_name: string,
>
>    location: string,
>
>    job_type: string,
>
>    job_desc: string
> 
> }
>
> ]

#### GET DETAIL
/jobs

> header
> - Authorization
>
>> - Bearer token
>
> parameters:
> - path:
>> - name: job_id
> - type:
>> - required
>
> response:
> - status: 200
> - message: Success Getting Job
> - data: {
>
>    id: string,
> 
>    job_name: string,
>
>    location: string,
>
>    job_type: string,
>
>    job_desc: string
> 
> }

#### Post Job
/jobs

> header
> - Authorization
>
>> - Bearer token
>
> body:
> - id
> - job_name
> - location
> - job_type
> - job_desc
>
> response:
> - status: 201
> - message: Success Post Job

#### Put Job
/jobs

> header
> - Authorization
>
>> - Bearer token
>
> - Set-Cookie
>
>> - JB_ID=string; Path=/jobs;
>
> - Cookie
>
>> - JB_ID=string; Path=/jobs;
>
> body:
> - job_name
> - location
> - job_type
> - job_desc
>
> response:
> - status: 202
> - message: Success Update Job