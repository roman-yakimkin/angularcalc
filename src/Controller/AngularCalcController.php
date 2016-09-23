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
        return array(
            '#title' => 'Angular Calculator',
            '#markup' => t('Here will be an angular calculator'),
        );
    }

}