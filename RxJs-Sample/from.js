const {
  from
} = rxjs;

const numbers = [33, 45, 24, 15, 10];

const number$ = from(numbers);

number$.subscribe(
  e => {
    console.log(e);
  },
  err => {
    console.log(err)
  },
  complete => {
    console.log('complete');
  });


const post = [{
    FirstName: 'Peter',
    LastName: 'Parker'
  }, {
    FirstName: 'Bruce',
    LastName: 'Wayn'
  },
  {
    FirstName: 'Tony',
    LastName: 'Stark'
  }
];

const post$ = from(post);

post$.subscribe(
  (d) => {
    console.log(d.FirstName)
  },
  (err) => {
    console.log(err);
  },
  () => {
    console.log('completed');

  }
);



const set = (['James', 20, {
  FirstName: 'Peter',
  LastName: 'Parker'
}]);

const set$ = from(set);

set$.subscribe(
  (d) => {
    console.log(d)
  },
  (err) => {
    console.log(err);
  },
  () => {
    console.log('completed');

  }
);