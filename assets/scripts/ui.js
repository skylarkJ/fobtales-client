'use strict';
const store = require('./store');

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

const signInSuccess = function (data) {
  $('.message').show();
  $('.message').text('You are Successfully signed in!').css('color', 'blue');
  $('.message').hide(10000);
  $('#modalSignIn').modal('hide');
  $('#button-signin-nav .modal-body').empty();
  $('#button-signin-nav').hide();
  $('#button-signup-nav').hide();
  $('.style-button-password').show();
  $('.style-button-signout').show();
  $('#create-story').show();
  $('#create-story .modal-body').empty();
  $('.user-name').html('<div>' + data.email + '</div>');
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
  $('.user-name').hide();
};

const signOutError = function () {
  $('.message').show();
  $('.message').text('Something went wrong! Try to sign out again.');
  $('#modalSignOut').modal('hide').css('color', 'orange');
};

const updateStory = function () {
  $('#modalStory').modal('hide');
  setTimeout(function() {
    $('#modalUpdateStory').modal('show');
  }, 500);
};

const deleteStory = function () {
  $('#modalStory').modal('hide');
  setTimeout(function() {
    $('#modalDeleteStory').modal('show');
  }, 500);

};

const clickOnStory = function (event) {
  const id = $(event.target).data('id');
  const story = store.stories.find(function(s){
    return s.id===id;
  });
$("#modalStory .modal-body").empty();
$("#modalStory .modal-body").append("<div class='story'>" + story.content + "</div>");

  if(store.user && story.user_id === store.user.id) {
  $("#modalStory .modal-body").append('<button id="update-story" type="button" class="btn btn-primary update-button" data-toggle="modal" data-target="#modalUpdateStory" data-whatever="@mdo">Update Story</button>');
  $("#modalStory .modal-body").append('<button id="delete-story" type="button" class="btn btn-primary delete-button" data-toggle="modal" data-target="#modalDeleteStory" data-whatever="@mdo">Delete Story</button>');
  $("#update-story").on('click',updateStory);
  $("#delete-story").on('click',deleteStory);
  $(".story-id").val(id); // will setup hidden id for delete
  $(".story-title").val(story.title);
  $(".story-content").val(story.content);
  }

$('#modalStory').modal('show');
};

const stories = function (data) {
  $('.stories').empty();
  $('#modalCreateStory').modal('hide');
  for (let i=0; i<data.stories.length; i++) {
    $(".stories").append("<div class='story' data-id=" +data.stories[i].id +">" +data.stories[i].title + "</div>");
  }
  $('.story').on('click', clickOnStory);
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
  signOutError,
  stories
};
