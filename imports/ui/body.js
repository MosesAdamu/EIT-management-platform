import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
 
import { EitData } from '../api/eitdata.js';

import './eits.js';
import './body.html';
 
 Template.body.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
});

Template.body.helpers({
  eitdata() {

  	 
      return EitData.find({ checked: { $ne: true } }, { sort: { createdAt: -1 } });
    }
   
});

Template.body.events({
  'submit #eitform'(event) {
    // Prevent default browser form submit
    event.preventDefault();
 
    // Get value from form element
    const target = event.target;
    const firstname = target.firstname.value;
    const lastname = target.lastname.value;
    const gender = target.gender.value;
    const dateofbirth = target.dateofbirth.value;

    var id = target.id.value;
 
    var data = {
      firstname: target.firstname.value,
      lastname: target.lastname.value,
      gender: target.gender.value,
      dateofbirth: target.dateofbirth.value,
    };

    if(id){
       Meteor.call('eitdata.update', id, data);
    }else{
       Meteor.call('eitdata.insert', data);
    }
              
    // Clear form
    target.firstname.value = '';
    target.lastname.value = '';
    target.gender.value ='';
    target.dateofbirth.value='';
  },


 });