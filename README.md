# Final Project Social Network .

Esta es mi primera red social, que fue diseñada para chefs y amantes de la cocina, donde pueden tener una base de datos de sus recetas y compartirla con otros usuarios. 

## Table of Content

- [Built With](##-Built-With)
- [Knowledge](##-Knowledge)
- [Getting Started](##-Getting-Started)
- [Partes](##-Partes)
- [Documentation](##-Documentation)
- [Author](##-Author)

## Built With 🛠️


* React
* .Laravel
* HTML
* Sass
* MYSQLi
* Typescript


## Knowledge 🧠 

* React
* Typescript
* .Laravel
* PHP

## Getting Started 🚀 


### Clonando repositorio

```js
https://github.com/danielvazquezguerra/chefFront.git
```


### Instalación dependencias

REACT
ANT DESIGN
COMPOSER
BOOTSTRAP
NODE

### Comenzando proyecto con Redux


### Configuración react-redux

npm install -g @angular/cli
ng new app
cd app
ng serve

### Arrancar el servidor

Para arrancar el servidor tienes que introducir el comando:

```
npm start
```
### Components
HOME
LOGIN
REGISTER
PRODUCTS
SHOPPING CART

#### Actions for Redux

    export  const  addProfilePhoto  =  async(formData) => {
    try {
	    await  axios.post(`http://localhost:8000/api/users/image`, formData, {
    
    headers: {
    
	    authorization: localStorage.getItem('authToken')
    
    }
    
    });
    
    store.dispatch({
    
    type: 'USER_PHOTO'
    
    })
    
    } catch (error) {
    
	    console.error(error)
    
    }
    
    }
    
      
    
    export  const  likes  =  async(id,recipe) => {
    
    try {
    
	    const  res  =  await  axios.post(`http://localhost:8000/api/posts/like/${id}`,recipe,{
    
    headers: {
    
      
    
	    Authorization:'Bearer '  +  localStorage.getItem('authToken')
    
    }
    
    })
    
    store.dispatch({
    
    type: 'LIKES',
    
    posts: res.data
    
    })
    
    } catch (error) {
    
    console.error(error)
    
    }
    
      
    
    getPostAll()
    
    }



## Documentation 📚 

- [React Documentation][https://es.reactjs.org/](https://es.reactjs.org/)
- [Redux]([https://es.redux.js.org/](https://es.redux.js.org/)
- [Ant Design](https://ng.ant.design/docs/introduce/en)
- [Bootstrap](https://ng-bootstrap.github.io/#/getting-started)
- [Laravel] [https://laravel.com/docs/7.x](https://laravel.com/docs/7.x)


## Author 👨🏼‍💻 

* **Daniel Vazquez Guerra** - [danielvazquezguerra](https://github.com/danielvazquezguerra)



## Images

### Home
![Home](https://github.com/danielvazquezguerra/chefFront/blob/feature/PostDetailsInit/chef-front/public/images/chilihot-04.jpg?raw=true)

### Register
![Register view](https://github.com/danielvazquezguerra/chefFront/blob/feature/PostDetailsInit/chef-front/public/images/chilihot-03.jpg?raw=true)

### AllPost

![All Posts](https://github.com/danielvazquezguerra/chefFront/blob/feature/PostDetailsInit/chef-front/public/images/chilihot-01.jpg?raw=true)


### PostDetails

![Post details](https://github.com/danielvazquezguerra/chefFront/blob/feature/PostDetailsInit/chef-front/public/images/chilihot-02.jpg?raw=true)






