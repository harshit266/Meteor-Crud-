import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import {newData} from '../collections/collections'
Meteor.startup(() => {
  Meteor.methods({
    'SubscribeNow': function (Data) {
        try {
            newData.insert(Data);
            console.log("data saved")
        } catch (error) {
            if (badThing) {
                throw new Meteor.Error('bad-thing', 'A bad thing happened.');
            }
        }
    },
    'editNow': function(id){
        
           if(newData.findOne({_id :id })){
               console.log("it exist");
           }
           else {
               console.log("it does not exist")
           }
        
    },
    'finaleditNow' : function(Data){
        console.log(Data)
        if(newData.findOne({_id :Data.id })){
            console.log(Data.name)
            newData.update({_id: Data.id}, {$set: {name: Data.name , email : Data.email}})
            console.log("data Saved")
        }
       
    },
 'deleted' : function(id){
    console.log(id)
    if(newData.findOne({_id :id })){
        
        newData.remove({_id:id})
        console.log("data deleted")
    }
   
},
    

});
});

Meteor.publish("hello" , function (){
  return newData.find({});
});

  