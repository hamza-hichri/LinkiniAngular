import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Authenticate } from '../Entities/authenticate';
import { AuthServiceService } from '../Services/auth-service.service';
import { AuthenticationService } from '../Services/authentication.service';
import { TokenStorageServiceService } from '../Services/token-storage-service.service';
import { TokenstorageService } from '../Services/tokenstorage.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {
  form: any = {};
  msg = '';
  roles: string[];
  constructor(private authservice: AuthenticationService,
    private tokenstorage: TokenstorageService,
              private router: Router) { }

  ngOnInit(): void {
  }

   authenticat() {

     this.authservice.authenticate(new Authenticate(this.form.username, this.form.password)).subscribe(
       data => {
         this.tokenstorage.saveToken(data.jwttoken)
         localStorage.setItem('Type', data.type)
         this.tokenstorage.saveUsername(data.username)
         this.tokenstorage.saveAuthorities(data.authorities)
         
         this.router.navigate(["/invitation"])
      },
      error => {
      this.msg = 'Username Or password Invalid';
      }
    )
  }
  
  // form: any = {
  //   username: null,
  //   password: null
  // };
  // isLoggedIn = false;
  // isLoginFailed = false;
  // errorMessage = '';
  // roles: string[] = [];
  // constructor( private formBuilder: FormBuilder,
  //   private http: HttpClient,
  //   private router: Router,
  //   private tokenStorage: TokenStorageServiceService,
  //   private authService :AuthServiceService, 
  // ) { }
  // ngOnInit(): void {
  //   if (this.tokenStorage.getToken()) {
  //     this.isLoggedIn = true;
  //     this.roles = this.tokenStorage.getUser().roles;
  //   }
  // }

  // onSubmit(): void {
  //   const { username, password } = this.form;

  //   this.authService.login(username, password).subscribe(
  //     data => {
  //       this.tokenStorage.saveToken(data.accessToken);
  //       this.tokenStorage.saveUser(data);
  //       this.isLoginFailed = false;
  //       this.isLoggedIn = true;
  //       this.roles = this.tokenStorage.getUser().roles;
  //       this.reloadPage();
  //     },
  //     err => {
  //       this.errorMessage = err.error.message;
  //       this.isLoginFailed = true;
  //     }
  //   );
  // }

  // reloadPage(): void {
  //   window.location.reload();
  // }


}
