import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
 
import { EitData } from '../api/eitdata.js';
 
import './body.html';

var deleteSelected = [];


Template.body.helpers({
  eitdata() {
    return EitData.find();
  }
});

 
Template.youtry.events({

  

    'click #updatebtn'(event){
      var eitform = document.querySelector('#eitform');

      eitform.firstname.value = this.firstname;
      eitform.lastname.value = this.lastname;
      eitform.gender.value = this.gender;
      eitform.dateofbirth.value = this.dateofbirth;
      eitform.id.value = this._id;
    },

      'change .delete-checkbox'(event) {
      const target = event.target;

      if (target.checked){
        deleteSelected.push(this._id);
        // console.log(eits_selected)
      }
      else {
        deleteSelected.splice(deleteRecord.indexOf(this._id), 1);
      }
      console.log(deleteSelected);
    }
    });

Template.body.events({

    // event handler to delete record(s)
    'click #deletebtn' (event) {
      for (var i=0; i<deleteSelected.length; i++) {
        Meteor.call('eitdata.remove',deleteSelected[i]);
      }
    },
  


});

