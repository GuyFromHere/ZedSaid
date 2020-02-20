# ZedSaid
A place to keep track of the ridiculous things my daughter says to me. Check it out [here!](https://zedsaid.herokuapp.com/)

# How it works:

1. DOM

User accesses html through the DOM. jQuery from the javascript.js include sends request data to the controller.

2. CONTROLLER

Routes pass through the controller, which uses functions defined in the zed.js model....

3. MODEL

The model is where database functions run. Those functions are pulled in from the ORM.

4. ORM

The ORM is where all the queries are stored. The request from the DOM trickles down to ORM functions which query the DB and send the results back to the controller and on to the DOM.
