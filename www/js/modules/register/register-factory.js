/** 
* The MIT License (MIT) 
*  
* Copyright (c) 2016 Auth0, Inc. <support@auth0.com> (http://auth0.com) 
*  
* Permission is hereby granted, free of charge, to any person obtaining a copy 
* of this software and associated documentation files (the "Software"), to deal 
* in the Software without restriction, including without limitation the rights 
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
* copies of the Software, and to permit persons to whom the Software is 
* furnished to do so, subject to the following conditions: 
*  
* The above copyright notice and this permission notice shall be included in all 
* copies or substantial portions of the Software. 
*  
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE 
* SOFTWARE. 
*/
(function (angular) {
    'use strict';

    angular
        .module('App.RegisterFactory')
        .factory('RegisterFactory', RegisterFactory);

    function RegisterFactory($http,InitConstants) {

        var factory = [];
		var REQUEST_BACKEND_HEADER ={
            'Content-Type':   'application/json; charset=utf-8'
        }
		var keyItem;
		

        factory.postRegistration = function (data) {
            var req = {
                method: 'POST',
                url: InitConstants.REST_AUTH_SERVER_BASE_URL + 'register/mobile',
                headers: REQUEST_BACKEND_HEADER,
                data: data
            };
            return $http(req);
        }
		
		factory.setKey = function (item){
          keyItem = item;
        }

        factory.getKey = function (){
          return keyItem;
        }


        return factory;



    }


})(window.angular);
