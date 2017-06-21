'use strict';

// require('./_home.scss');

module.exports = [
  '$log',
  '$rootScope',
  '$window',
  '$location',
  'authService',
  'childService',
  'petService',
  function($log, $rootScope, $window, $location, authService, childService, petService) {
    this.$onInit = () => {
      $log.debug('HomeController()');
      if(!$window.localStorage.token) {
        authService.getToken()
        .then(
          () => $location.url('/home'),
          () => $location.url('/signup')
        );
      }
      this.child = [];

      this.fetchChild = () => {
        return childService.fetchChild()
        .then(child => {
          this.child = child;
          this.currentChild = this.child[0];
        })
        .catch(err => $log.error(err));
      };

      this.fetchPets = () => {
        return petService.fetchAllPets()
        .then(pet => {
          this.pet = pet;
          this.currentPet = this.pet[0];
        });
      };

      this.logout = () => {
        return authService.logout()

        .catch(err => $log.error(err));
      };

      $rootScope.$on('locationChangeSuccess', this.fetchChild);
      return this.fetchChild();
    };
  }];
