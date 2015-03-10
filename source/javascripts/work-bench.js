////////////////////////////////////////////////////////////////////
//                      _           _                     _       //
//                     | |         | |                   | |      //
//  __      _____  _ __| | ________| |__   ___ _ __   ___| |__    //
//  \ \ /\ / / _ \| '__| |/ /______| '_ \ / _ \ '_ \ / __| '_ \   //
//   \ V  V / (_) | |  |   <       | |_) |  __/ | | | (__| | | |  //
//    \_/\_/ \___/|_|  |_|\_\      |_.__/ \___|_| |_|\___|_| |_|  //
//                                                                //
////////////////////////////////////////////////////////////////////

// The bulk of the code gets repeated, so want to only load it once
//
// We use Sprockets as provided via Middleman to automatically concatenate
// several javascript files together.
// http://middlemanapp.com/asset-pipeline/
//
// This file should declare the necessary 3rd party libraries we use.
// It is important to version all 3rd party libraries.
//
// It should also have all of the Work-Bench application code.
//
// When Work-Bench application code exceeds 100 lines it should be
// extracted out into individual files and `require`d from the index.
//
// KEEP THE INDEX CLEAN!

//////////////////////////////////////////////////////////////////////////
//                          3RD PARTY LIBRARIES                         //
//////////////////////////////////////////////////////////////////////////
//= require 'lib/jquery'
//= require 'lib/bootstrap'
//= require 'lib/lightbox.min'
//= require 'lib/jquery.easing.min'
//= require 'lib/jquery.scrollTo'
//= require 'lib/wow.min'

//////////////////////////////////////////////////////////////////////////
//                             GLOBAL CODE                              //
//////////////////////////////////////////////////////////////////////////

// Any Work-bench specific global code you've written (helpers, etc), get
// required here.

//= require 'global/template'

//////////////////////////////////////////////////////////////////////////
//                             INDIVIDUAL PAGES CODE                    //
//////////////////////////////////////////////////////////////////////////

// Include each page's javascript
