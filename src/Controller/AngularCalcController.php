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

        /*
        $output = array(
          '#title' => 'Angular calculator',
          '#markup' => '!!!',
        );
*/
        $output = [
            '#title' => 'Angular calculator',
            '#prefix' => '<div id="angularcalc">',
            '#suffix' => '</div>',
//            '#markup' => '!!!',
            '#theme' => 'angularcalc_viewcalc',
            '#data' => [],
        ];

        $output['#attached']['library'][] = 'angularcalc/angularjs';

        return $output;
    }
}