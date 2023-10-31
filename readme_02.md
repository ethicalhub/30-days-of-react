##Igniting_our_App##

Is our code production ready?
Noo----

- Optimize image, minify code, remove consoles & comments, bundling, splitting, chunking
- Lots of other packages, libraries makes React app faster
- npm: It doesn't have a full form (It is used to manages the package)

- Package.json is the configuration of npm
- The most important package in our project is bundler....
- CRA uses webpack, and babel
- We'll be using Parcel as a bundler

There're 2 types of dependencies/packages we can install
1- Dev dependency : only used in development phase 
2- Normal dependency : used in production also

- npm i parcel -D (Parcel is a beast)

- Each package has it's own package.json (to manage it's configuration)
- If you've package.json, and package-lock.json... we can recreate node_modules by npm install (and it will install all the depnedencies)

- CDN links aren't good way to include react in our web project

- Parcel allow browser to automatically refresh the page, if something changes in the code
- Parcel create new development build everytime we save our changes and creates parcel-cache to reduce the rebuilding efforts
- Read Parcel documentation
- remove main entry point from package.json while making build using parcel

--- Add "browserlist : ['last 10 versions of Chrome', 'last 2 versions'] to make your website work on different browsers ---



Q1- What is NPM? 
- A standard repository for all the packages, libraries. Npm manages that in our app.

Q2- What is a bundler?
- It bundles your app, packages your app properly (minifying it, caching, optimizing) to make our project able to ship to production

Q3- What is caret"^" and tildae ~?
Q4- What is package-lock.json and what's the difference b/w package.json and package-lock.json?
- package-lock.json keeps the exact version, not approx

Q5- integrity? Why is hash present in package-lock.json?
- it keep tracks of all the versions, exact versions of all the dependencies... To avoid conflicts in Production

Q6- What is node_modules folder?
- IT contains the actual data of dependencies, where all our packages exists... etc... (Learn more)

Q7- What is Transitive dependency?
- Parcel has it's own dependency, and those dependency can have their own dependency... know as Transitive dependency

Q8- What is .gitignore?
Q9- npm vs npx?
- NPX means execute a package
- NPM Install a package


Q10- What is HMR?
Q11- BrowserList package?




-------------------------
npx parcel index.html (it'll create a development server)
<!-- Server running at http://localhost:1234 -->

# Parcel
- Dev Build
- Local Server
- HMR (hot module replacement)
- File watching algorithm (written in c++)
- Caching : Faster builds
- Image Optimization
- Minification of our file
- Bundling 
- Compression
- Consistent Hashing
- Code Splitting
- Differential bundling - support old browser
- Diagnostic
- Error handling
- https
- Tree shaking - remove unused code 
- different build for dev and prod