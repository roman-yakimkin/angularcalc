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

        $output = [];
        $output['#title'] = 'Angular calculator';
        $output['#markup'] = '<div id="angularcalc"></div>';
        $output['#attached']['library'][] = 'angularcalc/angularjs';

        return $output;
    }

}