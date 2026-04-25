import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { LeaveService } from '../../Service/leave';

@Component({
  selector: 'app-personnel',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './personnel.html'
})
export class PersonnelComponent {
  leaveForm: FormGroup;
  submitted = false;
  showToast: boolean = false;
  constructor(private fb: FormBuilder, private leaveService: LeaveService) {
    this.leaveForm = this.fb.group({
      fullName: ['', Validators.required],
      leaveType: ['Yıllık İzin', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      description: ['']
    }, { validators: this.dateValidator });
  }

  // Custom Validator: Başlangıç tarihi bitişten büyük olamaz
  dateValidator(group: FormGroup) {
    const start = group.get('startDate')?.value;
    const end = group.get('endDate')?.value;
    if (start && end && start > end) {
      return { invalidDate: true };
    }
    return null;
  }

  onSubmit() {
  this.submitted = true;
  if (this.leaveForm.invalid) {
    return;
  }
    this.leaveService.createLeave(this.leaveForm.value).subscribe({
      next: () => {
        
        this.leaveService.triggerRefresh(); // ADMIN LİSTESİNE YENİLEME SİNYALİ GÖNDERİR
        this.leaveForm.reset({ leaveType: 'Yıllık İzin' });
        this.submitted = false;
        this.triggerNotification(); // Bildirimi tetikle
      },
      error: (err) => alert('Hata: ' + err.error.message || 'Talep oluşturulurken bir hata oluştu.')
    });
}
triggerNotification() {
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 4000); // 4000 milisaniye = 4 saniye
  }
}