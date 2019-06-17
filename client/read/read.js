import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import {newData} from '../../collections/collections'
import {validateEmail} from '../../utils'



var z;

Template.second.onCreated(function() { 
  this.subscribe('hello');
  this.autorun(() => {
    if (this.subscriptionsReady()) {
      // FlowRouter.go('', newData.findOne());
    }
  });
});



Template.second.onRendered(function(){
  console.log(" hey onRendered is working ")
  var x =newData.find({}).fetch();
  //console.log(x)
})

// Template.second.onDestroyed(function(){
//   console.log("adsdf  ")
//   z.stop();
//   })


Template.second.helpers({
 
  cclist() {
    var q =newData.find({}).fetch();
    console.log(q)
		return q;
	}
});

Template.second.events({
  'click .edit':function(event, instance) {      
    event.preventDefault();
    // console.log(this._id);
    var id= this._id ;

    Meteor.call('editNow', id, function(error, result){
      if(error){
          console.log(error.reason);
      }else{
         FlowRouter.go('/edit/?id=' + id );
      }
  }); 
  }, 
  'click .delete':function(event, instance) {      
    event.preventDefault();
    console.log("--------------------")
    console.log(this._id);
    var id= this._id ;
     
    Meteor.call('deleted', id, function(error, result){
      if(error){
          console.log(error.reason);
      }else{
         FlowRouter.go('/register' );
      }
  }); 
  },  
});

