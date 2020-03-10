import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { QcService } from '../services/qc.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ToastService } from 'ng-zorro-antd-mobile';

@Component({
  selector: 'app-qc-scan',
  templateUrl: './qc-scan.component.html',
  styleUrls: ['./qc-scan.component.css']
})
export class QcScanComponent implements OnInit {

  code: string;
  scanForm: FormGroup;
  inboundId: string;
  qcCode: string;
  id: string;
  data = [{ name: "良品", value: "Good" }, { name: "不良品", value: "Damage" }];
  selectedStatus1 = { name: "良品", value: "Good" };

  message: string = "";

  onFocus: object = {
    focus: false
  };

  constructor(private qcService: QcService, private _location: Location,
    private toastService: ToastService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.buildForm();
    this.id = this.route.snapshot.params["id"];
  }

  onChange = event => {
    console.log('output radio status: ', JSON.stringify(event));
  }

  onSubmit(): void {
    let barcode = this.scanForm.controls["barcode"].value;
    let qcCode = this.selectedStatus1.value;

    this.qcService.saveDetail(this.id, barcode, qcCode).subscribe(r => {
      this.message = barcode + " :" + r.message;
      if (!r.isAllFinished)
        this.toastService.info(r.message);
    }
    );
  }

  buildForm(): void {
    this.scanForm = new FormGroup(
      {
        carton: new FormControl(),
        barcode: new FormControl(),
        qcCode: new FormControl()
      }
    );
  }

  goBack(): void {
    this._location.back();
  }
}
