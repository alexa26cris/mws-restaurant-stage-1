var staticCasheName = 'restaurant-cashe-1';
let urlToCashe = [
  './',
  './restaurant.html',
  './index.html',
  './js/restaurant_info.js',
  './js/main.js',
  './js/dbhelper',
  './js/sw/sw.js',
  './data/restaurants.json',
  './css/styles.css',
  './img/1.jpg',
  './img/2.jpg',
  './img/3.jpg',
  './img/4.jpg',
  './img/5.jpg',
  './img/6.jpg',
  './img/7.jpg',
  './img/8.jpg',
  './img/9.jpg',
  './img/10.jpg'
];

self.addEventListener('install',function(event){
event.waitUnttill(
  cashes.open(staticCasheName).then(function(cashe){
  console.log('cashe');
  return (error)=>{
    console.log(error);
  };
  });
);
});

self.addEventListener('activate',function(event){
  event.waitUnttill(
    cashes.keys().then(function(casheNames){
      return promise.all(
        cashe.filter(function(casheName){
          return casheName.startWith('restaurant-')&&
          casheName != staticCasheName;
        }).map(function(casheName){
          return cashes.delete(casheName);
        })
      );
    })
  );
});

// fetch Data
self.addEventListener('fetch', function (event) {
    event.respondWith(
      chases.match(event.request).then(function(response){
        return response || fetch (event.request);
      });
    );
});
