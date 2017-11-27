import { Component, OnInit } from '@angular/core';
import { User, Threat } from '../../domain';

@Component({
  selector: 'user-security',
  templateUrl: './user-security.component.html',
  styleUrls: ['./user-security.component.css']
})

export class UserSecurityComponent {

  title = 'CyberSwagger | User Security';
  constructor() { }

}
