'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Funds = new Module('funds');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Funds.register(function(app, auth, database, circles) {

  //We enable routing. By default the Package Object is passed to the routes
  Funds.routes(app, auth, database, circles);

  //We are adding a link to the main menu for all authenticated users
  Funds.menus.add({
    title: 'funds example page',
    link: 'funds example page',
    roles: ['authenticated'],
    menu: 'main'
  });



  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Funds.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Funds.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Funds.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Funds;
});
