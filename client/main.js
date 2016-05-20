import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';



Template.binding.viewmodel({
    first: '',
    last: '',
    isFocused: true,
    fullName: function() {
      return this.first() + ' ' + this.last();
    }
 });
