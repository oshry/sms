<?php

define('DOCROOT', realpath(dirname(__FILE__)).DIRECTORY_SEPARATOR);
//define('THUMBS', realpath(DOCROOT.'assets/thumbs').DIRECTORY_SEPARATOR);
define('BASE', "http://" . $_SERVER['SERVER_NAME']."sms");
//define('THUMBS_SHOW', BASE.'assets/thumbs/');

// -- Locale setup ---------------------------------------------

// Set the default locale.
// @link  http://php.net/setlocale
setlocale(LC_ALL, 'en_US.utf-8');

// Set the default time zone.
// @link  http://php.net/timezones
date_default_timezone_set('UTC');

// Set the MB extension encoding to the same character set
// @link  http://www.php.net/manual/function.mb-substitute-character.php
mb_internal_encoding('none');