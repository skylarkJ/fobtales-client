'use strict';

const config = require('./config');
const store = require('./store');

const signUp = function(data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up/',
    method: 'POST',
    data,
  });
};

const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data,
  });
};

const changePassword = function (data) {
  return $.ajax({
    url: `${config.apiOrigin}/change-password/${store.user.id}`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data,
  });
};

const signOut = function () {
  return $.ajax({
    url: `${config.apiOrigin}/sign-out/${store.user.id}`,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};


const stories = function() {
  return $.ajax({
    url: config.apiOrigin + '/stories/', // coming from stories folder from api r
    method: 'GET'
  });
};

const story = function(ID) {
  return $.ajax({
    url: config.apiOrigin + '/stories/' + ID, // coming from stories folder from api r
    method: 'GET'
  });
};

const createStory = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/stories',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    method: 'POST',
    data,
  });
};


const updateStory = function(ID,data) {
  return $.ajax({
    url: config.apiOrigin + '/stories/' + ID, // coming from stories folder from api r
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    method: 'PATCH',
    data
  });
};

const deleteStory = function(ID) {
  return $.ajax({
    url: config.apiOrigin + '/stories/' + ID, // coming from stories folder from api r
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    method: 'DELETE'
  });
};



module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  stories,
  story,
  createStory,
  updateStory,
  deleteStory
};
