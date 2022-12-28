import { Component, OnInit } from "@angular/core";
import { Alert, AlertType } from "./alert";
import { AlertService } from "../../Service/alert.service";
import { Input } from "@angular/core";

@Component({
  selector: "ap-alert",
  templateUrl: "./alert.component.html",
})
export class AlertComponent implements OnInit {
  @Input() public timeOut = 3000;
  public alert: Alert;

  constructor(private alertService: AlertService) {}

  public ngOnInit() {
    this.alertService.getAlert().subscribe((alert) => {
      this.alert = alert;
      setTimeout(() => {
        this.alert = null;
      }, this.timeOut);
    });
  }

  public getAlertClass(alert: Alert) {
    if (!alert) return;
    switch (alert.alertType) {
      case AlertType.DANGER:
        return "alert alert-danger";
      case AlertType.INFO:
        return "alert alert-info";
      case AlertType.SUCCESS:
        return "alert alert-success";
      case AlertType.WARNING:
        return "alert alert-warning";
    }
  }
}
