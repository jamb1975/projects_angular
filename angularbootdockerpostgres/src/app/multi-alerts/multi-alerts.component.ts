﻿import { Component } from '@angular/core';

import { AlertService } from '../_alert/alert.service';

@Component({ templateUrl: 'multi-alerts.component.html' })
export class MultiAlertsComponent {
    constructor(public alertService: AlertService) { }
}