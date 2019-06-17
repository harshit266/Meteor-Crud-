import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import {newData} from '../../collections/collections'
import {validateEmail} from '../../utils'



var z;

Template.delete.onCreated(function() { 
  this.subscribe('hello');
  this.autorun(() => {
    if (this.subscriptionsReady()) {
    }
  });
});



Template.delete.onRendered(function(){
  console.log(" hey onRendered is working ")
  var x =newData.find({}).fetch();
  
})


Template.delete.helpers({
  cclist() {
    var q =newData.find({}).fetch();
    console.log(q)
		return q;
	}
});

Template.delete.events({
  'click .delete':function(event, instance) {      
    event.preventDefault();
    var id = FlowRouter.getQueryParam('id');
    Meteor.call('deleted', id, function(error, result){
      if(error){
          console.log(error.reason);
      }else{
         FlowRouter.go('/register')
      }
  }); 
  },  
});

