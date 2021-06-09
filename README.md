###  Frontend Challenge “imageGrid” with React & Unsplash Api

## Introduction
This  project is aimed at implementing a frontend challenge with six requirements.
The result of the frontend challenge can be viewed at https://unsplash-reactjs.netlify.app/

## The Challenge

To use unsplash Api to fetch(a GET request) photos, and get a set of images. The application should be responsive and work both in portrait and landscape modes. It should also support infinity scrolling to fetch the images while the image load, this is also known in the dev community as lazy loading.The users should be able to click on a grid element to get a full-width representation of the images and additional metadata.
   Finally, the users can navigate to the previous or next full-width without having to close the view.

## Technical Requirement
React
Tests
Linter (Prettier)
May be CSSinJS, but not a requirement (JSS, styled-component)

## NPM Packages used and their descriptions




| Package                  |                  Description                  |
| ------------------------ | :-------------------------------------------: |
| Material UI/core | To build coomponent faster without any additional setup |
| MaterialUI/icon           | React wrapper for custom SVG icons|
| react-responsive         |      Media queries for responsive layout      |
| Material UI Core         |      Loading spinner and modal component      |
| axios                    |              Makes HTTP requests              |
| Prettier                 |              Code styling                     |
| JavaScript-Time-Ago | Localized relative date/time formatting (pass & future dates)            |
| React-redux                 |  React components read data from the redux store, and 
 dispatch actions to the store      |
 |   React-resoponsive-masonry     | A lightweight responsive that helps to change the number of columns in my layout         |
| Redux-Thunk                 |    Use as a middleware to deal with async & let you call the actions creators that return a function instead of an object. The function received a store dispatch        |

| Redux                |     A predictable state container design to be used in Javascript apps that behave consistently.In a nutshell words it is state management       |

##  Solution for the requirements
App  Structure
* public
* Src 
    * actions
         * image.js
         * modal.js
       * components
           * Header
                * Header.css
                * index.js
            * Image
                * image..js
            * ImageGrid
                * index.js
            * ImageInfo
                * index.js
            * ImageModal
                * index.js
    * reducers
         * image.js
         * index.js
         * modal.js
     * App.css
     * App:js
     * index.css
     * index.js
     * serviceWorker.js
     * store.js
     * todo.txt
     * .gitiginore
     * .prettierignore
     * LIECENSE
     * README.md
     * Package-lock.json
     * Package.json
    

                    
         
## Unsplash Api       
I registered for the unsplash.com website using a developer account in order for me to get access to the Access Keys, Secret  and other developers resources .   

## Api GET Request
The GET request from the Api was done with the aid of axios, it is called using redux, in the image.js file located in the actions folder. A javascript object payload holds a request of the data. This data is used to update the state. There is also a catch error promise if no data is gotten from the api an error message will be generated.
Responsiveness
The use of CSS display flex property, react-responsive, and react-responsive masonry has aided the web app to be responsive whenever the size of the window screen decreases or increases.It therefore achieved the web app to work well in both the web and mobile platforms.

## Infinity Scrolling with Lazy loading
A spinner is added to indicate when Y-scrolling is done as the images are fetching. The spinner is created with the help of ‘circularprogress’ from material-ui. Many aspects (e.g setLoading,)are passed to the state once infinity scrolling applies; these can be found on the index.js file located in the ‘component/ImageGrid’ folder. The file index.js located in the ImageGrid folder is one of the heartbeats of my application. The hook access the redux store state in here. The hooks take a selector function as an argument. The selector is called with the store state
Clicking on the imageGrid & Navigation
The images are loaded as thumbnails, to get a full-view, the user can click any of the images and view the full width. Users can then navigate by pressing the previous or forward buttons to view other images without closing the full-view window.
Image MetaDATA
There is a button attached to the full-view image grid which when click shows additional information about the image.

## The Surprise 
I first built the app entirely with reactjs, I used hooks to manage the state. I found out that even though it works well as intended, there is a delay with the lazy loading in fetching new images.
I then think of separation of concern by using Redux in calling to api and managing the state.To summarize it, Redux maintains the state of an entire application in a single immutable state tree (object), which can’t be changed directly. When something changes, a new object is created (using actions and reducers).
You may be asking, “Why would I need to use Redux?” Great question. There are a few benefits of using Redux in this application  such as:-
Predictability of outcome
There is always one source of truth, the store, with no confusion about how to sync the current state with actions and other parts of the application.
Maintainability
Having a predictable outcome and strict structure makes the code easier to maintain.
Organization
Redux is stricter about how code should be organized, which makes code more consistent and easier for a team to work with.
Server rendering
This is very useful, especially for the initial render, making for a better user experience or search engine optimization. Just pass the store created on the server to the client side.
Developer tools
Developers can track everything going on in the app in real time, from actions to state changes.
Community and ecosystem
This is a huge plus whenever you’re learning or using any library or framework. Having a community behind Redux makes it even more appealing to use.
Ease of testing
The first rule of writing testable code is to write small functions that do only one thing and that are independent. Redux’s code is mostly functions that are just that: small, pure and isolated.


## Testing
Todo
Logo


     
    





## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

Be happy with this project!!!
# react-infinity-scroll
