angular.module('starter', ['ionic','MainController','AuthorController','CurriculumController','BibliotecaController','BookController'])

.config(function($urlRouterProvider,$stateProvider){

      $stateProvider  
      .state('main',{
        url:'/main',
        templateUrl:'templates/main.html',
        controller:'HomeCtrl'
      })
      .state('acceso',{
        url:'/acceso',
        templateUrl:'templates/biblioteca.html',
        controller:'ibibliotecaCtrl'
      })
      .state('consulta',{
        url:'/consulta',
        templateUrl:'templates/autor.html',
        controller:'authorCtrl'
      })
      .state('curriculum',{
        url:'/curriculum',
        templateUrl:'templates/vitae.html',
        controller:'curriculumCtrl'
      })
      .state('bookDetail',{
        url:'/book/:id',
        templateUrl:'templates/libros.html',
        controller:'bookCtrl'
      })

      $urlRouterProvider.otherwise('main');
})
.factory('bookService', function() {     
var books = [       
      { title: 'Los miserables', year: '2005', author: 'Victor Hugo', editorial: 'Debolsillo', cover: 'img/losmiserables.jpg' }, 
      { title: 'Cumbres borracosas', year: '1992', author: 'Emilie Brönte', editorial: 'Thomas Cautley Newby', cover: "img/cumbresborrascosas.jpg" },      
      { title: 'Estudio en escarlata', year: '1887',  author: 'Arthur Conan Doyle', editorial: 'Anaya', cover: "img/estudioenescarlata.jpg" }, 
      { title: 'Cien años de soledad', year: '1975', author: 'Gabriel Garcia Marquez', editorial: 'Plaza & Janes S.A.', cover: "img/cienañosdesoledad.jpg" },       
      { title: 'La guerra de los mundos', year: '1984', author: 'Herbet George Wells', editorial: 'Seix Barral', cover: "img/laguerradelosmundos.jpg" }
      ];     
  return {         
    getBooks: function() {             
      return books;         
    },         
    getBook: function(id) {             
      return books[id];         
    },     
  } 
});

