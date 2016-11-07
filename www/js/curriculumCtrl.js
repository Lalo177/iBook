angular.module('CurriculumController',[])

.controller('curriculumCtrl',function($scope){
	$scope.works = [  
    { date: '2009 - 2011', description: 'Fotografo' }, 
    { date: '2011 - 2012', description: 'Herrero' },
    { date: '2012 - 2014', description: 'Auxiliar de recursos financieros en la dependencia de la Secretaria de Eduacion Cultura y Deporte de Gobierno del Estado' }, 
	{ date: 'Enero 2015 - hoy', description: 'Desarrollo de aplicaciones' },      

]; 
})