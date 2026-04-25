import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

export interface Leave {
  id?: number;
  fullName: string;
  leaveType: string;
  startDate: string;
  endDate: string;
  description?: string;
  status?: string;
}

@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  private apiUrl = 'http://localhost:3000'; // NestJS portumuz
  private refreshSubject = new Subject<void>();
  refresh$ = this.refreshSubject.asObservable();
  constructor(private http: HttpClient) {}
  triggerRefresh() {
    this.refreshSubject.next();
  }
  createLeave(leave: Leave): Observable<Leave> {
    return this.http.post<Leave>(`${this.apiUrl}/leave/izin-talep`, leave);
  }

  getLeaves(): Observable<Leave[]> {
    return this.http.get<Leave[]>(`${this.apiUrl}/leave/izinler`);
  }

  updateStatus(id: number, status: string): Observable<Leave> {
    return this.http.put<Leave>(`${this.apiUrl}/leave/izinler/${id}/status`, { status });
  }
  deleteLeave(id: number): Observable<Leave> {
  return this.http.delete<Leave>(`${this.apiUrl}/leave/izinler/${id}`);
}
}