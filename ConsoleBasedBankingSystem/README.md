# Banking-System
A JavaScript-based banking system to demonstrate advanced JavaScript concepts.
##########################################################################################

_____Overall Description_____

This demo bank system doesn't have a well-developed UI and works entirely using javascript prompt method and the browser console 
It attempts to cover advanced javascript concepts, some of which were introduced in the ES6 
Among the concepts demonstrated include
- Reflect API - construction, method call, prototype setting
- Sets and Maps
- Closures
- Tagged Templates
- First Class Functions
- Name exports and Export defaults
- Iterators and Generators

_____How it Works_____

- As the main js module includes an infinitely looping Imediately Invokable Function Expression (IIFE), a prompt dialog with basic instruction pops up 
- This web app doesn't use any kind of storage or database so a live server is needed to successfully traverse through the operations 
- Although the app contains basic error handling, it doesn't prevent the loss of user given data 
- The console is invaluable for the app as progress and history are displayed to guide the user

____Minor Details_____

- The last feature of the app, i.e., displaying the data of old and newly added account holders, requires a pass key to display the result which is shown on the console (only).
 - The passkey is admin
- Refreshing the web page either stops or restarts the app and so it serves as a on/off switch
- The code includes sufficient comments to demonstrate as well as explain the use of each concepts
