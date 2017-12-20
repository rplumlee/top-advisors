import { Template } from 'meteor/templating';
import './navbar.html';

Template.adminNavbar.events({
  'click #logout'(event) {
    Meteor.logout(() => {
      Router.go('login');
    });
  }
});