'use strict';

module.exports = [
  '$q',
  '$log',
  '$http',
  'authService',
  function($q, $log, $http, authService) {
    $log.debug('pet service');
    let service = {};

    service.createPet = (child, pet) => {
      $log.debug('create pet');
      return authService.getToken()
      .then(token => {
        let config = {
          headers: {
            Accept: 'application./json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        };
        return $http.post(`https://paw-sibilities-backend.herokuapp.com/api/child/${child.id}/pet`, pet, config);
      })
      .then(res => {
        let pet = res.data;
        return pet;
      })
      .catch(err => {
        $log.error(err.message);
        return $q.reject(err);
      });
    };

    service.getPetUser = (child, pet) => {
      $log.debug('create pet');
      return authService.getToken()
      .then(token => {
        let config = {
          headers: {
            Accept: 'application./json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        };
        return $http.get(`https://paw-sibilities-backend.herokuapp.com/api/child/${child.id}/pet`, pet, config);
      })
      .then(res => {
        let pet = res.data;
        return pet;
      })
      .catch(err => {
        $log.error(err.message);
        return $q.reject(err);
      });
    };


    service.getPetChild = (child, pet) => {
      $log.debug('create pet');
      return $http.get(`https://paw-sibilities-backend.herokuapp.com/api/child/${child.id}/pet`, pet)
      .then(res => {
        let pet = res.data;
        return pet;
      })
      .catch(err => {
        $log.error(err.message);
        return $q.reject(err);
      });
    };

    service.updatePet = (child, pet) => {
      $log.debug('create pet');
      return authService.getToken()
      .then(token => {
        let config = {
          headers: {
            Accept: 'application./json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        };
        return $http.put(`https://paw-sibilities-backend.herokuapp.com/api/child/${child.id}/pet`, pet, config);
      })
      .then(res => {
        let pet = res.data;
        return pet;
      })
      .catch(err => {
        $log.error(err.message);
        return $q.reject(err);
      });
    };
  },
];