import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalValidator } from 'src/app/core/validators/email';
import { PhoneValidator } from 'src/app/core/validators/phone';
import { GuestService } from 'src/app/services/guest.service';
import { SnackBarService } from 'src/app/services/toast/snack-bar.service';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.scss']
})
export class GuestComponent implements OnInit {

  createGuestForm: FormGroup = new FormGroup({});

  constructor(
    private _fb: FormBuilder, private guestService: GuestService,
    private snackBarService: SnackBarService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.setFormGroupCreateGuest();
  }

  setFormGroupCreateGuest() {
    this.createGuestForm = this._fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      isFirstTime: [false, Validators.required],
      yourChurch: ['', Validators.required],
      howDidYouMeetThe70x7: ['', Validators.required],
      email: [
        '',
        Validators.compose([
          GlobalValidator.emailValidator,
        ]),
      ],
      phone: ['', [ PhoneValidator.phoneValidValidator]],
      wouldLikeIncludeInWhatsapp: [false]
    })
  }

  createGuest() {
    this.guestService.createGuest(this.createGuestForm.value).subscribe(res => {
      this.snackBarService.showNotification(
        'Dados salvos com sucesso. Muito obrigado!',
        'done'
      );
      this.router.navigateByUrl('')
    })
  }
}
