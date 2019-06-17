import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import {newData} from '../../collections/collections'
import {validateEmail} from '../../utils'



var z;

Template.hello.onCreated(function() { 
  this.subscribe('hello');
  this.autorun(() => {
    if (this.subscriptionsReady()) {
      FlowRouter.go('', newData.findOne());
    }
  });
});



Template.hello.onRendered(function(){
  console.log(" hey onRendered is working ")
  var x =newData.find({}).fetch();
  console.log(x)
})

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'submit .data':function(event, instance) {      
    event.preventDefault();
     var user =  $("#user").val();
     var email =  $("#email").val();
    
     if(!validateEmail(email)){
        alert('invalid email') 
        return false
  }
      let Data = {
        name: user,
        email: email,
        createdAt: new Date()
    };

    Meteor.call('SubscribeNow', Data, function(error, result){
      if(error){
          console.log(error.reason);
      }else{
         FlowRouter.go('/register')
      }
  }); 
  },  
});

