<div id="top"></div>

<!-- PROJECT SHIELDS -->
[![LinkedIn][linkedin-shield]][linkedin-url]




<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://heazy.studio/">
    <img src="public/favicon.ico" alt="Logo" width="60" height="60">
  </a>

  <h4 align="center">heazy.studio</h4>

  <p align="center">
    Generate stylish SVG design assets with ease.
    <br/>
    Developed by <a href="https://www.linkedin.com/in/maxim-buz-17a2a717b/">Maxim Buz</a>
    <br/>
    <a href="https://www.youtube.com/watch?v=58rATWqcFxo">YouTube Showcase</a>
  </p>
</div>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://heazy.studio/)

Heazy let's you generate cool SVG designs for your website projects (and presentations, if thats your thing).
Easily generate unique and funky vector graphics within minutes right inside your browser, without having to learn any advanced tools like Adobe Illustrator. Create a user account to save your very own design templates and explore the desings other users have made public.

You can download any design in PNG and SVG, or copy code snippets for your JavaScript or TypeScript React projects.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

heazy.studio was created by using the following awesome tools:

Frontend:<br/>
* [TypeScript](https://www.typescriptlang.org/)
* [React.js](https://reactjs.org/)
* [React Query](https://react-query.tanstack.com/)
* [Chakra UI](https://chakra-ui.com/)

Backend:<br/>
* [TypeScript](https://www.typescriptlang.org/)
* [Node / Express](https://expressjs.com/)
* [GraphQL](https://graphql.org/)
* [Prisma](https://www.prisma.io/)
* [PostgreSQL](https://www.postgresql.org/)

Authentication, Image Storage and Analytics:
* [Firebase](https://firebase.google.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- INSTALLATION -->
## Run locally

### Firebase
* Visit <a href="https://firebase.google.com/">Firebase</a> and add a new project
* Make sure to enable Google Analytics
* As soon as the project was set up by Google, click on "Add Firebase to your web app" and give it a nickname
* Leave "Firebase hosting" unchecked
* Inside your local repo, go into <code>./src/firebase/index.ts</code> and switch out <code>firebaseConfig</code> with the new API keys provided by Firebase
* Back on the firebase website click on "continue to console" and add Authentication and Storage to your project

### Frontend
```bash
npm install
```
(fyi: due to the use of Chakra UI and the recent update of React 18, you will receive some npm warnings)
```bash
npm start
```

### Backend
```bash
cd server && npm install
```
```bash
touch .env
```
* Make sure you have a running postgres server and have all connection information available to you
* Visit <a href="https://firebase.google.com/">Firebase</a>, go to project settings > Service accounts and generate a new private key
* Open the generated file and copy all its contents
* open the .env file and add the following environment variables
```bash
DATABASE_URL="postgresql://DB_USERNAME:DB_PASSWORD@HOST:5432/heazy?schema=public"
GOOGLE_CREDS=paste_firebase_full_object_here
PORT=4000
```
* To setup the database, run the following command
```bash
npx prisma migrate dev --name init
```
```bash
npm run start
```

Now you should have frontend and backend up and running!
<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Maxim Buz - [LinkedIn](https://www.linkedin.com/in/maxim-buz-17a2a717b/) - mbuz.maxim@gmail.com

Project Link: [https://github.com/MaximBuz/heazy-svg-creator](https://github.com/MaximBuz/heazy-svg-creator)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/maxim-buz-17a2a717b/
[product-screenshot]: ./github-screenshot.png
