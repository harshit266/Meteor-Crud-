import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import {newData} from '../../collections/collections'
import {validateEmail} from '../../utils'



var z;

Template.edit.onCreated(function() { 
  this.subscribe('hello');
  this.autorun(() => {
    if (this.subscriptionsReady()) {
    }
  });
});



Template.edit.onRendered(function(){
  console.log(" hey onRendered is working ")
  var x =newData.find({}).fetch();
  
})


Template.edit.helpers({
  func() { 
   var post=  newData.find({ _id: FlowRouter.getQueryParam('id') }).fetch()
   return post;
   
	}
});

Template.edit.events({
  'submit .data':function(event, instance) {      
    event.preventDefault();
     var user =  $("#user").val();
     var email =  $("#email").val();
     var id = FlowRouter.getQueryParam('id');
   
     if(!validateEmail(email)){
        alert('invalid')  
        return false;
      }
      
     let Data = {
        id : id,
        name: user,
        email: email,
        createdAt: new Date()
    };

    Meteor.call('finaleditNow', Data, function(error, result){
      if(error){
          console.log(error.reason);
      }else{
         FlowRouter.go('/register')
      }
  }); 
  },  
});

