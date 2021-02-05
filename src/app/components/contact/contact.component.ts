import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

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
    private dataService: DataService,
  ) {
    this.success = false;
    this.submitted = false;
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
   }

  ngOnInit(): void {

  }

  onSubmit(): void {
    this.submitted = true;
    if (this.contactForm.valid) {
      const data = {
        name: this.contactForm.value.name,
        description: this.contactForm.value.description,
      };

      this.submitted = false;
      this.success = true;
      this.contactForm.reset();

      this.dataService.sendContactMessage(data.name, data.description);
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
