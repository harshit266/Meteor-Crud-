
FlowRouter.route('/',{
    action : function(){
      BlazeLayout.render('hello')
    }
  })
  
  
  FlowRouter.route('/test',{
    action : function(){
      BlazeLayout.render('forTest')
    }
  });

  FlowRouter.route('/register',{
    action : function(){
      BlazeLayout.render('second')
    }
  });
  FlowRouter.route('/edit/',{
    action : function(){
      BlazeLayout.render('edit')
    }
  });
  FlowRouter.route('/delete/',{
    action : function(){
      BlazeLayout.render('delete')
    }
  });



  //------------------------Iron router ------------------------//
// Router.route('/', {
//   waitOn: function(){
//     // alert("On Wait ON")
//     return Meteor.subscribe('hello')
//   },

//   action: function(){

//    if ( this.ready() ){   
//     this.render('hello');
//   }
//   else {
//     this.render('loading');
//   }
// }
// });
// Router.route('/test', function () {
//   this.render('forTest');
// });
//------------------------------------------------------------------//


//----------------------FlowRouter-----------------------------//
// FlowRouter.subscriptions = function() {
//   this.register('hello', Meteor.subscribe('hello'));
// };

// FlowRouter.route('/', {
//   triggersEnter: [ function (context) {
//     Meteor.subscribe('hello')
//  }],
//   action: function(params) {
//       BlazeLayout.render('hello', {content: 'myTpl'});
//   }
// });

// FlowRouter.route('/', {
//   subscriptions: function(params, queryParams) {
//     this.register('hello', Meteor.subscribe('hello', Meteor.userId()));
//   },
//   action(params, queryParams) {
//   	 if(Meteor.user()){
//   	 	BlazeLayout.render("hello");
//   	 }
//   	 else{
//   	 	BlazeLayout.render("loading");
//   	 }     
//   }
// });



//-----------------------------------------------------------//


