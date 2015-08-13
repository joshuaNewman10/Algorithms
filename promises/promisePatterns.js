//Antipattern making promise pyaraid
loadSomething().then(function (something) {
  loadAnotherThing.then(function (another) {
    doSomethingOnBothOfThem(something, another);
  })
})

//promise returned here will resolve with array of results that will be passed to then
//spread splits this up amongst the params
q.all([loadSomething(), loadAnotherThing()])
    .spread(function (something, another) {
      doSomethingOnBothOfThem(something, another);
    });

//-----------------------------------------//

//Antipattern returning wrong promise
function asyncCall () {
  var promise = doSomethingAsync();
  promise.then(function () {
    somethingSuperComplicated();
  });

  return promise;
}

function asyncCall () {
  var promise = doSomethingAsync();
  return promise.then(function () {
    somethingSuperComplicated();
  });
}

//-----------------------------------------//

//Antipattern when want to do something asynchronous on unknown num of items
function workMyCollection () {
  var resultArr = [];
  function _recurse (idx) {
    if (idx >= resultArr.length) {
      return resultArr;
    }

    return doSomethingAsync(arr[idx]).then(function(res) {
      resultArr.push(res);
      return _recurse(idx+1);
    });

  }
  return _recurse(0);
}

//Parallel
function workMyCollection () {
  return q.all(arr.map(function (nextItem, index) {
    return doSomethingAsync(nextItem);
  }));
}

//Series
function workMyCollection () {
  return arr.reduce(function (promise, nextItem) {
    return promise.then(function(result) {
      return doSomethingAsync(nextItem, result);
    });
  }, q());
}

//-----------------------------------------//

//Antipattern-Forgotten Promise
function func () {
  var deferred = Q.deferred();
  doSomethingAsync().then(function (res) {
    res = manipulateRes(res);
    defferred.resolve(res);
  }, function () {
    deferred.reject(err);
  });
  return deferred.promise;
}

function func() {
  return doSomethingAsync().then(function (res) {
    return manipulateRes(res);
  });
}

//-----------------------------------------//


//Error handling anti-pattern
somethingAsync.then(
  function func(stuff) {
    return somethingElseAsync();
  },
  function (err) {
    handleError();
  }
);

somethingAsync.then(
  function (stuff) {
  return somethingElseAsync();
})
.catch(function (err) {
  handleError();
});

//-----------------------------------------//

//Antipattern sometimes promise sometimes not
var promise;

if (needAsyncCall) {
  promise = doSomethingAsync();
} else {
  promise = Q.resolve(42);
}

promise.then(function () {
  doSomethingAwesome();
});

//Right way
Q(needAsyncCall ? doSomethingAsync() : 42)
.then(function (value) {
  doSomethingGood();
})
.catch(function (err) {
  handleThatError(err);
});


//-----------------------------------------//

//Properly chaining promises
return Gigs.getGigInfo(gigId).then(function (gigInfo) {
  return Locations.getLocationInfo(gigInfo.locationId);
})
.then(function (locationInfo) {
  return UserGigs.getGigInfo(gigId);
})
.then(function (userIds) {
  return q.all(userIds.map(function (id) {
    return Users.getEmployeeEmail(id);
  }));
})
.then(function(emails) {
  return emails.reduce(function(promise, email) {
    return promise.then(function () {
      return sendEmail(email);
    });
  }, q());
})
.catch(function (err) {
  cleanUpMess(err);
});


//-----------------------------------------//

//Reduce array of promises
