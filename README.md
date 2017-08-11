# Ideasy
Ideasy is a service to verify a persons identity. ThirdPartyWebsites can also check via a HTTP request if a registered user in Ideasy want the use of his address to get authorized by Ideasy. That means that noone can make you pay for any things he ordered to your address.

  - prevent yourself from identity theft
  - prevent your adress from being abused

# How can we make you proof your identity?
We plan to provide several ways to identify your self when you create an account at Ideasy. The more ways you use the higher is your security level.

### Advantages for online shops or dilivery services

Often user accounts in different are filled with wrong or outdated informations.
With *Ideasy* you can for example check if the information in your database is still correct. 

### Tech
There is a Java backend which has a Http websocket open as API to receive third party requests and answer to them. The Frondend and registration-backend is written in jQuery, PHP, HTML and JavaScript

#### How it works
1. third party announces the user with sending a GET request to the server in order to get a sessionId which is valid for 10 minutes.
2. third party redirects the user to Ideasy's login Page with the help of the sessionId.
3. the user will now logic on this page and will proof his identity in several ways like 2-way-authentication...
4. the user will accept which informations Ideasy wants to send back to the third party service and will either accept or reject it.
5. Ideasy will now or won't answer the third party service if their information was *correct*, but Ideasy wont't tell them any blank information in any case.
6. the user gets redirected to the third party page.

#### HTTP API
The API offeres several variables with different functions:
##### player announce:
`ideasydomain/verify?skey=65465416541654&link=example.com&priority=5`

| Key  | Usage |
| --- | --- |
| `skey` | security key of a company that is registered at Ideasy |
| `link` | redirect link |
| `priority` | priority of the authentification | 
| --- | --- |
| `firstName` | third party's information which should get proofed |
| `lastName` | third party's information which should get proofed |
| `birth` | third party's information which should get proofed |
| `placeOfBirth` | third party's information which should get proofed |
| `address` | third party's information which should get proofed |
| `nationality` | third party's information which should get proofed |
| `idCardId` | third party's information which should get proofed |
| `eyeColor` | third party's information which should get proofed |
| `idCardExpiration` | third party's information which should get proofed |

##### player login (backend)
`ideasydomain/login?password=6546541HASHED6541654&id=dfas65f4&email=as454fs@saf`

| Key  | Usage |
| --- | --- |
| `password` | hashed password |
| `id` | sessionId |
| `email` | users email-address |

##### address auth check
`ideasydomain/checkForAuth?address={ojdsfijasf:jnfas}`

| Key  | Usage |
| --- | --- |
| `address` | json-formatted address |

### Todos

 - Write MORE Tests

