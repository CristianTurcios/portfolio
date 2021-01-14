import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  success: boolean;
  submitted: boolean;
  contactForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.success = false;
    this.submitted = false;
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [
        Validators.required,
        Validators.email
      ]
      ],
      subject: ['', Validators.required],
      description: ['', Validators.required],
    });
   }

  ngOnInit(): void {

  }

  onSubmit(): void {
    this.submitted = true;
    console.log(this.contactForm.value.name);
    if (this.contactForm.valid) {
      const data = {
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        subject: this.contactForm.value.subject,
        description: this.contactForm.value.description,
      };

      console.log('data', data);
      this.submitted = false;
      this.success = true;
      this.contactForm.reset();

      setTimeout(() => {
        this.success = false;
      }, 3000);
    }
  }

  // tslint:disable-next-line:typedef
  get form() {
    return this.contactForm.controls;
  }

}
