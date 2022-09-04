# Contact List Application

A React application that fetches data from an API endpoint and displays as a contact list on the frontend.

The live version of the application can be found at : https://contact-list-card-rs.vercel.app

## What's being used?

1. HTML5
2. CSS
3. JavaScript
4. ReactJS
5. Bootstrap

## Run Locally

Clone the project

```bash
  git clone https://github.com/comingback2life/contact-list-card-rs
```

Go to the project directory

```bash
  cd contact-list-rs
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

## Docker Installation

Build from DockerFile

```bash
  git clone https://github.com/comingback2life/contact-list-card-rs
```
```bash
  cd contact-list-rs
```

```bash
   docker build -t contact-list-rs:latest .
```

After the build has completed.

```bash
    docker run --name contactList -d -p 3000:3000 contact-list-rs:latest
```

## How I approached this problem ?

I first created a Figma File that helped me wireframe my application
and once I had an idea on how I wanted the website to look, I created a React app using

```bash
    npx create-react-app <app-name>
```

Once that was done, I started building the smaller components.

For styling and layout, I predominantly used BootStrap and for icons I used react-icons package for the icons.

For state management, I used @reduxjs/toolkit , react-redux package

I also used react-bootstrap package for the Bootstrap components in some sections.

I used axios for fetching data from the URL , managed the state and am displaying to the user as a contact list.

## Acknowledgements

- [Santa Icon ](https://pixabay.com/vectors/santa-reindeer-shristmas-deliver-31319/)
- [Favicon](https://favicon.io/)
