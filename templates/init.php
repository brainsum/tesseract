<?php

/**
 * @file
 * Initalize Tesseract by checking some settings.
 */

if (!function_exists('kint') && php_sapi_name() !== 'cli') {
  drupal_set_message('Devel Kint is not enabled. It is recommended to turn it on for Development environments.', 'warning');
}

// Global constants.
define('ROOT', Drupal::root());