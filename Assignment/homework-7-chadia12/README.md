# MIU-MSD-CS571-2022-10-Homework7
## React Navigation
Create a new React Native app with Expo-CLI and use [React Navigation](https://reactnavigation.org/) to support the following app structure:
* `Home` *(Bottom Tab Navigator)*
    * `Services` *(Stack Navigator)*
      * `Quotes`*Screen* 
      * `Pic of the Day` *Screen*
    * `About me` *Screen*
      * `Hobby` *Reusable Component*


### Implement the following screens features:
* Use [Kanye Rest](https://kanye.rest/) API and fetch a random quote to be displayed within the `Quotes` Screen. Create a button `Refresh` that will fetch a new quote every time when clicked. 
* Use [Lorem Picsum REST API](https://picsum.photos/) to display a random image withing `Pic of the Day` Screen. Create a button `Refresh` that will fetch a new image every time when clicked. 
* Add a button on both `Quotes` and `Pic of the Day` to navigate between these two screens.
* `About me` Screen has your picture, along with a short description about yourself. 
  * Display an array of hobbies using a reusable `Hobby` component which will accept the hobby name along with a vector icon name that matches the hobby.
* Copy your source code files into this clone and commit/push your code.
