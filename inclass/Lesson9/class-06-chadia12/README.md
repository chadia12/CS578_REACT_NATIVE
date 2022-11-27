# MIU-MSD-CS571-2022-10-Class06
# Create an Expo application which has the following Screens:
## Login
* Input for Username
* Secured Input for Password
* Login Button: When pressed, the API login is sent to the server, the server will verify and return the token or error codes. The token will be saved to `AsyncStorage` if logged in successfully.
## UserList
* List all users. Since the authenticated and authorized can get the list of users, the fetch to get the list should contain the token in the header.
## App
* App loads the user's information from `AsyncStorage`. If existed, App shows UserList. Otherwise, Login is displayed. App also contains the Loggout Button. If pressed, the user's information in `AsyncStorage' will be removed and Login is shown again.

# Create an Express app with `users` collection in MongDB  to have several APIs
* POST `/users/login`: Verify the username and password from the frontend app and return a token or errors
* POST `/users`: Add a new user with a username and password. The password should be hashed before saving to the database (use bcrypt)
* GET `/users`: Verify the token in the middleware and return the list of users or errors

