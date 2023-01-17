import { Component, OnInit } from '@angular/core';
import { signUp } from '../data-types';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  showLogin = false;
  authError: String = '';
  constructor(private seller: SellerService) { /* TODO document why this constructor is empty */ }

  ngOnInit(): void {
    /* TODO document why this method 'ngOnInit' is empty */

  }

  signUp(data: signUp): void {
    console.warn(data)
    this.seller.userSignUp(data);
  }
  Login(data: signUp): void {
    this.seller.userLogin(data)
    this.seller.isLoginError.subscribe((isError) => {
      if (isError) {
        this.authError = "Email or Password is incorrect";
      }
    })


  }

  openLogin() {
    this.showLogin = true;
  }
  opensignup() {
    this.showLogin = false;
  }

}
