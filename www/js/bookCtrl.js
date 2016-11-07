angular.module('BookController',[])

.controller('bookCtrl',function($scope,bookService,$stateParams){

	$scope.articulo = books[$stateParams.id];

})
var books = [       
      { title: 'Los miserables', year: '2005', author: 'Victor Hugo', editorial: 'Debolsillo', cover: 'img/losmiserables.jpg' }, 
      { title: 'Cumbres borracosas', year: '1992', author: 'Emilie Brönte', editorial: 'Thomas Cautley Newby', cover: "img/cumbresborrascosas.jpg" },      
      { title: 'Estudio en escarlata', year: '1887',  author: 'Arthur Conan Doyle', editorial: 'Anaya', cover: "img/estudioenescarlata.jpg" }, 
      { title: 'Cien años de soledad', year: '1975', author: 'Gabriel Garcia Marquez', editorial: 'Plaza & Janes S.A.', cover: "img/cienañosdesoledad.jpg" },       
      { title: 'La guerra de los mundos', year: '1984', author: 'Herbet George Wells', editorial: 'Seix Barral', cover: "img/laguerradelosmundos.jpg" }
      ];   