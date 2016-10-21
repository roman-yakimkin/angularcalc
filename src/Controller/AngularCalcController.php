<?php

namespace Drupal\angularcalc\Controller;

use Drupal\Core\Controller\ControllerBase;

/*
 *  Our controller for the module
 */
class AngularCalcController extends ControllerBase {

    /**
     * This will return the output of the foobar page.
     */
    public function viewAngularCalc() {

        // Array for output
        $output = [
            '#title' => 'Angular calculator',
            '#prefix' => '<div id="angularcalc" ng-controller="angularcalcCtrl">',
            '#suffix' => '</div>',
            '#theme' => 'angularcalc_viewcalc',
            '#data' => [],
        ];

        return $output;
    }
}