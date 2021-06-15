# Evaluate A News Article with Natural Language Processing
Udacity project to build a web-tool that run Natural Language Processing (NLP) on articles or texts found on websites using API.

## Install -> node.js & git 
-git --version
-node -v
-npm -v
`` ref udacity-projects-starter-kit ``
// https://www.youtube.com/watch?v=xPuBEwwL-lA
`` validation ref
 // ref. https://stackoverflow.com/questions/30970068/js-regex-url-validation
 // ref https://www.w3resource.com/javascript-exercises/javascript-regexp-exercise-9.php  ``
1. Move to the project folder
in cmd / Terminal cd folder name /cs project directory
2. Clone the repo /or download it 
3. Install npm /webpack lesson 2
- npm install
4. Install loaders and plugins lesson 3 & 4
** if error happen -> npm cache clean --force 

# Choose the necessary installation for your development mode
npm i -D @babel/core @babel/preset-env babel-loader
npm i -D style-loader node-sass css-loader sass-loader
npm i -D clean-webpack-plugin
npm i -D html-webpack-plugin
npm i -D mini-css-extract-plugin
npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin

5. Get an API key at https://www.meaningcloud.com/

6. Configure environment variables using dotenv package
	1. npm install dotenv 
	2. Create a new `.env` file in the root of your project
	3. Fill the `.env` file with your API key =>
	API_KEY=**************************
	
7. Start the project
open 2 terminals 
1st terminal 
`npm run build-dev`
2nd terminal 
`npm run build-prod` 
`npm start` 

