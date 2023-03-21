# Zip Code Search
This is a Vue 3 single-page application (SPA) that allows users to search for data based on ZIP code input. The application renders data about the user's State, City, HTTP Referer, UTM tags (if these exist in the link), IP, and User Agent.

## Technologies
The application is built using the following technologies:

#### 1. Vue 3
#### 2. Vue Router 4
#### 3. Bootstrap 5
#### 4. Pinia

## Installation and Usage
#### To install and use the application, follow these steps:

1. Clone the repository or download the source code.

2. Open the terminal and navigate to the project's root directory.

3. Run npm install to install the dependencies.

4. Run npm run serve to start the development server.

5. Open your web browser and navigate to http://localhost:8080.

## Usage Instructions
Enter a valid USA ZIP code into the input field and click the "Render" button.

The application will display the data about the entered ZIP code, including State and City.

Click the "IP Lookup" button to get data about the user's ISP, City, Region, and Country.

Click the "Back to Main Page" button to go back to the main page and enter another ZIP code.

## Project Structure
The project's source code is structured as follows:

#### public/: 
Contains the index.html file, which is the entry point for the application.
#### src/assets/:
Contains the application's assets, such as images and icons.
#### components/:
Contains the application's Vue components.
#### router/:
Contains the application's Vue Router configuration.
#### api/:
Contains the application's api.
#### store/:
Contains the application's Pinia store, which manages the application's state.
#### views/:
Contains the application's views, which are the top-level components that correspond to the application's pages.
#### App.vue:
The root Vue component of the application.
#### main.js:
The entry point for the application, which initializes the Vue app and mounts it to the DOM.

## Credits
This application was created by Stanislav Kinash. If you have any questions or feedback, please feel free to contact me.