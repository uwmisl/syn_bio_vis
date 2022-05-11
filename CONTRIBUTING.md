# Contributing to syn_bio_vis


<!-- vim-markdown-toc GFM -->

- [Reporting Problems](#reporting-problems)
- [Contribute](#contribute)
  - [Project structure](#project-structure)
  - [For developers](#for-developers)
  - [For Educators](#for-educators)
    - [Embed simulation](#embed-simulation)

<!-- /TOC -->


## Reporting Problems

Feel free to open an [issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue)
if you encounter any problems.


## Contribute

[Pull requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)
are welcomed.

### Project structure
```
.
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── client                            # Client is a React-app
│   ├── README.md
│   ├── package-lock.json             # Client dependencies
│   ├── package.json
│   ├── public
│   │   └── index.html
│   └── src                           # Source code for client
│       ├── App.js
│       ├── actions                   # Actions for API requests
│       ├── api                       # All API requests
│       ├── components                # React components
│       │   ├── d3                    # Rendering simulation using d3
│       │   ├── simulation            # Simulation page
│       │   └── tutorial              # Tutorial page
│       ├── constants
│       ├── hooks                     # Custom hooks defined here
│       ├── index.js
│       └── reducers
├── package-lock.json
└── server                            # Nodejs server
    ├── controller                    # Functions executed by routes
    ├── index.js
    ├── package-lock.json             # Server dependencies
    ├── package.json
    ├── routes                        # API interfaces of backend
    ├── simulation                    # Python modules for simulation
    ├── src
    │   ├── simulation                # Pre-generated simulations are saved here
    │   └── tutorial                  # Tutorial pages are saved here
    └── utils                         # Some utility functions
```

### For developers

In order to switch the server target between local and remote server development, change the simUrl and tutorUrl in the /syn_bio_vis/client/src/api/index.js file.

### For Educators

Each tutorial page is written
in [markdown](https://github.github.com/gfm/)
and saved in `syn_bio_vis/server/src/tutorial/`.

#### Embed simulation

1. Generate the desired simulation
    on the website.
    Refer to [README.md](https://github.com/FeiyouG/syn_bio_vis/blob/main/README.md)
    for details.
2. Save the `JSON` file of the simulation.
3. Add the `JSON` file in `syn_bio_vis/server/src/simulation`
    and give it an unique name.
4. In your tutorial markdown file,
    insert the following code block
    in the section where you want to
    insert the simulation:
      ```code
       ```
       {
        name: "name_of_the_JSON_no_extension"
       }
       ```
      ```

Refer to `syn_bio_vis/server/src/tutorial`
for examples.
