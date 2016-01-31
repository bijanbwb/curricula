# Curricula

![Curricula](https://cloud.githubusercontent.com/assets/201320/12700216/bf824676-c7a7-11e5-833b-9e6f46b08e3c.png)

[Curricula](http://bijanbwb.github.io/curricula/) is a small sample application intended to help manage learning
resources. It is built with React, Webpack, and Node.

The idea is that there are so many great learning resources available, and
that a structured approach may be worthwhile. Hopefully, this application will
enable the creation of a curated curriculum and a more efficient approach to
the learning process.

### Resources

- Books
- Courses
- Screencasts
- Talks
- Blog Posts
- Challenges
- Projects
- **Building**

### Scripts

- `npm run build`: Uses webpack to create static files, including `index.html`
                   and all necessary `.js` files. These are ignored from the
                   repo, but are available in the `/build` directory.
- `npm run deploy`: Pushes to `gh-pages` branch and deploys to production.
- `npm run stats`: Generates a `stats.json` file with build statistics.
- `npm run start`: Starts the webpack dev server with the application running
                   at `http://localhost:8080/`.
- `npm run tdd`: Watch files and continually run specs.
- `npm run test`: Runs all tests in the `/specs` directory.

### Versions

- node `5.5.0`
- npm `3.3.12`
- react `0.14.7`
- webpack `1.12.12`

### Acknowledgements

This stack for this application was derived from following along with the
[SurviveJS](http://survivejs.com/) tutorial. Check it out if you're interested in
creating something similar!

