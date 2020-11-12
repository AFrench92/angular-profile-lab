import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserProfile } from './interfaces/user-profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  userProfile: UserProfile = {
    name: 'Tony',
    contact: '248-248-2180',
    bio: 'BUILD MY PYRAMID!!!!',
  };
  constructor() {}

  getUserProfile = () => {
    return this.userProfile;
  };

  setUserProfile = (form: NgForm) => {
    this.userProfile = form.value;
  };
}
