import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  user: any;
  constructor(
    private readonly authService: AuthenticationService, 
    private router: Router) {

  }
  ngOnInit(){
   this.getUser();
  }
  async getUser(){
    this.authService.getUser().then(
      (users)=> {
        this.user = users[0];
      }
    );
    
    
  }
  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }
}
