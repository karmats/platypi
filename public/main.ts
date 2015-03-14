/**
 * This is the entry-point for Browserify. This file can maintain references to all your 
 * custom controls, injectables, and other files that won't necessarily be loaded from files
 * included in this file.
 */

// libraries
require('platypus');
require('platypusui');

// polyfills
require('./polyfills');

// scripts
require('./scripts');

// app
require('./app/app');

require('./services/user/user.service');

require('./services/products/products.service');

require('./repositories/user/user.repository');

require('./viewcontrols/register/register.viewcontrol');

require('./viewcontrols/login/login.viewcontrol');

require('./common/controls/navbar/navbar.templatecontrol');

require('./viewcontrols/order/order.viewcontrol');

require('./viewcontrols/confirmation/confirmation.viewcontrol');
