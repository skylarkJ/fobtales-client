'use strict';

const getFormFields = require('../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

const store = require('./store');

const onSignUp = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpError);
};

const onSignIn = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.signIn(data)
    .then((response) => {
    store.user = response.user;
    return store.user;
  })
    .then(ui.signInSuccess)
    .catch(ui.signInError);
};

const onChangePassword = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordError);
};

const onSignOut = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.signOut(data)
    .then(() => {
    delete store.user;
    return store;
  })
.then(ui.signOutSuccess)
.catch(ui.signOutError);
};

const getStories = function () {
  api.stories()

    .then((response) => {
    store.stories = response.stories;
    return response;
  })
    .then(ui.stories);
};

const createStory = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.createStory(data)
    .then(getStories);
};

const updateStory = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.updateStory(data.story.id,data)
    .then(getStories)
    .then(function () {
      $('#modalUpdateStory').modal('hide');
    });
};

const deleteStory = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.deleteStory(data.story.id)
    .then(getStories)
    .then(function () {
      $('#modalDeleteStory').modal('hide');
    });
};

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('submit', onSignOut);
  $('#story').on('submit', createStory);
  $('#update-story').on('submit', updateStory);
  $('#delete-story').on('submit', deleteStory);
};

module.exports = {
  addHandlers,
  getStories
};
