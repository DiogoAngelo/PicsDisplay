import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { AlertType, Alert } from "../shared/alert/alert";

@Injectable({
  providedIn: "root",
})
export class AlertService {
  public alertSubject: Subject<Alert> = new Subject<Alert>();

  public success(message: string) {
    return this.alert(AlertType.SUCCESS, message);
  }

  public warning(message: string) {
    return this.alert(AlertType.WARNING, message);
  }

  public danger(message: string) {
    return this.alert(AlertType.DANGER, message);
  }

  public info(message: string) {
    return this.alert(AlertType.INFO, message);
  }

  private alert(alertType: AlertType, message: string) {
    this.alertSubject.next(new Alert(alertType, message));
  }

  public getAlert() {
    return this.alertSubject.asObservable();
  }
}
