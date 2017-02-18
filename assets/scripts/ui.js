'use strict';

const success = (data) => {
  if (data) {
  // handle success
  console.log(data);
  $('.message').text('Success!');
  }
};

const failure = (error) => {
  // handle failure
  console.error(error);
  $('.message').text('Error!');
};


const signUpSuccess = function () {
  $('.message').show();
  $('.message').text('Thank you for signing up! Now sign in!').css('color', 'blue');
  $('#modalSignUp').modal('hide');
  $('.message').hide(10000);
};

const signUpError = function () {
  $('.message').show();
  $('.message').text('Error signing up! Try again.').css('color', 'orange');
  $('#modalSignUp').modal('hide');
};

const signInSuccess = function () {
  $('.message').show();
  $('.message').text('You are Successfully signed in!').css('color', 'blue');
  $('.message').hide(10000);
  $('#modalSignIn').modal('hide');
  $('#button-signin-nav').hide();
  $('#button-signup-nav').hide();
  $('.style-button-password').show();
  $('.style-button-signout').show();
  $('.create-button').show();
};

const signInError = function () {
  $('.message').show();
  $('.message').text('Something went wrong. Sign in again!').css('color', 'orange');
  $('#modalSignIn').modal('hide');
};

const changePasswordSuccess = function () {
  $('.message').show();
  $('.message').text('Your password has changed!').css('color', 'blue');
  $('#modalChangePassword').modal('hide');
  $('.message').hide(10000);
};

const changePasswordError = function () {
  $('.message').show();
  $('.message').text('Changing password failed!').css('color', 'orange');
  $('#modalChangePassword').modal('hide');
};

const signOutSuccess = function () {
  $('.message').show();
  $('.message').text('You have successfully signed out!');
  $('#modalSignOut').modal('hide').css('color', 'blue');
  $('.message').hide(10000);
  $('.create-button').hide();
  $('.style-button-password').hide();
  $('#button-signin-nav').show();
  $('#button-signup-nav').show();
  $('#button-signout-nav').hide();
};

const signOutError = function () {
  $('.message').show();
  $('.message').text('Something went wrong! Try to sign out again.');
  $('#modalSignOut').modal('hide').css('color', 'orange');
};

module.exports = {
  failure,
  success,
  signUpSuccess,
  signUpError,
  signInSuccess,
  signInError,
  changePasswordSuccess,
  changePasswordError,
  signOutSuccess,
  signOutError
};
