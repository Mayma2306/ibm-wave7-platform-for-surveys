import { Component, OnInit,Inject } from '@angular/core';
import {FormControl} from '@angular/forms';
import {TooltipPosition} from '@angular/material/tooltip';
import { UserRegistrationService } from '../user-registration.service';
import { User } from '../modals/User';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginUser } from '../modals/Login';
import { Profile } from 'selenium-webdriver/firefox';

export interface DialogData{
  email:string;
  gender:string;
  agegroup : string;
  location :string;

}



@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {
  
 name :string;
  user:User;
  updateuser:User;
  email:string;
  id:string;
  
  
  
  
  
  constructor(private registrationService: UserRegistrationService,private dialog: MatDialog) { }

  ngOnInit() {
    this.id = this.registrationService.loginCredentials.id;
    this.registrationService.getUserById(this.id).subscribe((data) =>{
      this.user=data;
      console.log(this.user);
    })
  }
  updateUser(user:User){
    //console.log(user);
    this.registrationService.updateUser(user,user.id).subscribe((data)=> {
       this.user = data;
      console.log("result is ", data);
      this.registrationService.getUserById(this.id).subscribe((data) => {
        this.user=data;})
    });
}
  data;
  openDialog(user:User) {
    const dialogRef = this.dialog.open(DialogComponent,
      {
        width : '250px',
        data : {}
      });
    dialogRef.afterClosed().subscribe(result => {
      this.data=result;
      console.log(result);
      this.updateUser(result);
    });
  }
  
  


 }
@Component({
  selector: 'app-dialogComponent',
  templateUrl: 'dialogComponent.html',
 })
 export class DialogComponent {
  
  user:User;
  email:string;
  name:string;
  gender:string;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,private registrationService: UserRegistrationService) {}
    onNoClick(): void {
      this.dialogRef.close();
    }
  
    
 }