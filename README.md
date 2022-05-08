# Thematic Frontend Task

This project is based off the Auth0 project created for a new project. Details on Auth0 are at the end of this file.

This sample demonstrates:

- Logging in to Auth0 using Redirect Mode
- Accessing profile information that has been provided in the ID token
- Gated content. The `/profile` route is not accessible without having first logged in
- Calling the task test backend to get information on the current-user

## Project setup

```bash
npm install
```

### Compiles and hot-reloads for development

```bash
npm run dev
```

## Deployment

### Compiles and minifies for production

```bash
npm run build
```

### Run your tests

```bash
npm run test
```

### Lints and fixes files

```bash
npm run lint
```

## What is Auth0?

Auth0 helps you to:

- Add authentication with [multiple authentication sources](https://docs.auth0.com/identityproviders), either social like **Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce, among others**, or enterprise identity systems like **Windows Azure AD, Google Apps, Active Directory, ADFS or any SAML Identity Provider**.
- Add authentication through more traditional **[username/password databases](https://docs.auth0.com/mysql-connection-tutorial)**.
- Add support for **[linking different user accounts](https://docs.auth0.com/link-accounts)** with the same user.
- Support for generating signed [Json Web Tokens](https://docs.auth0.com/jwt) to call your APIs and **flow the user identity** securely.
- Analytics of how, when and where users are logging in.
- Pull data from other sources and add it to the user profile, through [JavaScript rules](https://docs.auth0.com/rules).

-- notes from doing task
started at 7pm

test app is built using reactstrap but I believe you mentioned using semantic ui? The design image also looks more like semantic. I decided to use Semantic because I wasn't super familiar with either library and semantics components matched the design pretty well out of the box.
Was not expecting react 16.x, that version is over 2 years old.
Ran into an issue with the typing of the semantic react library because the version of typescript was too old.
I filtered out the one piece of sample data that matches the sampleHeader, but that isn't super performant and I would rather it be removed from the api, as it seems like bad data? That's the kind of thing I would bring up to someone at least.
Some sort of unique primary key would make some of these requirements easier. Maybe that was the point though.

nice things to do but didn't
max length handling ont he sample data
remove selected filters from add filter options
map the sampleHeader text to a nicer format like the design image shows
make type an enum
any sort of mobile styles
error states and validation
unit tests

requirements, deleted as completed

● It should be possible to rearrange the filters to show up in a specific order -- This is a pretty big pain to do, even with the libraries out there. And this interview project is already far too long.

ended task at 10:17pm
