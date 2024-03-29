import { Component, OnInit } from '@angular/core';
import { signOut, Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  user = {
    displayName: localStorage.getItem('displayName'),
    email: localStorage.getItem('email'),
    photoURL: localStorage.getItem('photoURL')
  }


  constructor(private auth: Auth, private router: Router) { }

  ngOnInit() {
  }

// Log ud funktion
  logOut() {
    signOut(this.auth).then(() => {
      this.router.navigate(['/login'])
      localStorage.clear();
    })
  }
}
