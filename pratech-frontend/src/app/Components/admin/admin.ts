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
  showToast: boolean = false;
  constructor(private leaveService: LeaveService) { }

  ngOnInit() {
    this.loadLeaves();

    // Servisten gelen yenileme sinyallerini dinle
    this.leaveService.refresh$.subscribe(() => {
      this.loadLeaves();
      this.triggerNotification(); // Bildirimi tetikle
    });
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
  onDelete(id: number) {
    if (confirm('Bu talebi silmek istediğinize emin misiniz?')) {
      this.leaveService.deleteLeave(id).subscribe({
        next: () => this.loadLeaves(),
        error: () => alert('Silme işlemi başarısız.')
      });
    }
  }
  triggerNotification() {
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 4000); // 4000 milisaniye = 4 saniye
  }
}