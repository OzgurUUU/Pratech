import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Leave, LeaveService } from '../../Service/leave';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin.html'
})
export class AdminComponent implements OnInit {
  leaves: Leave[] = [];

  constructor(private leaveService: LeaveService) {}

  ngOnInit() {
    this.loadLeaves();
  }

  loadLeaves() {
    this.leaveService.getLeaves().subscribe(data => {
      this.leaves = data;
    });
  }

  updateStatus(id: number, status: string) {
    this.leaveService.updateStatus(id, status).subscribe({
      next: () => {
        // Ekranı anlık güncelleme (Sayfayı yenilemeden)
        const leave = this.leaves.find(l => l.id === id);
        if (leave) {
          leave.status = status;
        }
      },
      error: () => alert('Durum güncellenirken bir hata oluştu.')
    });
  }
}