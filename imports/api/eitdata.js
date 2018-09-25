import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const EitData = new Mongo.Collection('eitdata');

var deleteSelected = [];

 
Meteor.methods({
  'eitdata.insert'(data) {
    check(data.firstname, String);
 	check(data.lastname, String);
 	check(data.gender, String);
 	check(data.dateofbirth, String);
 	data.createdAt= new Date();
 	EitData.insert(data);
 
 
  },
  'eitdata.update'(taskId, data) {
    check(data.firstname,String);
    check(data.lastname,String);
    check(data.gender, String);
    check(data.dateofbirth,String);
   
 
     EitData.update(taskId,{ $set : data })
  },

  'eitdata.remove'(taskId) {
    check(taskId, String);
 
    EitData.remove(taskId);
  },

   
});
