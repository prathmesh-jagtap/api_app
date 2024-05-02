import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { User } from '../../user';
import { DataService } from '../../data.service';


@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  message:String="Not Submitterd!";
  user:User={
    name: "", username: "", email: "", id:0
  };
  constructor(private dataservice:DataService){};
  onSubmit() {
    this.dataservice.createuser(this.user).subscribe(()=>{this.message="Submitted!"});
  }
}
