# Introdução ao ReactJS 
Conteúdo introdutório à linguagem JavaScript desenvolvido através do acompanhamento das aulas disponibilizadas pela Digital Innovation One juntamente com os professor: Bruno Carneiro (Líder Técnico na Luiza Labs).  
https://digitalinnovation.one    
![](https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png)
> Fonte: FreeCodeCamp (2020)  
-------------  
### Conteúdos Abordados 

* Components
* Configuration
* Renderization
* LifeCycle
* JSX 
* WebPack
* Conditional Renderization
* Events Manipulation  
* Lists and Keys  
* Thinking React
-------------  
### Observações  
Para executar as aulas, é necessário ter o nodeJs e o NPM instalados. Cada pasta de aula deve conter o node_modules assim como os pacotes JSON.  

-------------

### Exemplo 1 - JavaScript e JSX - LifeCycle　

```JavaScript
//Depois que o componente é montado, o valor de copo será alterado depois de 3 segundos
  componentDidMount() {
    window.setTimeout(() => {
      this.setState({
        copo: 'suco'
      })
    }, 3000)
  }

  alterarCopo = () => {
    this.setState({
      copo: 'refrigerante'
    })
  }

  render() {
    const { clock, copo } = this.state
    return (
      <div>
        <h1>{clock}</h1>
        <button onClick={() => this.alterarCopo()}><h1>{copo}</h1></button>
      </div>
    )
  }
```  
-------------  
### Exemplo 2 - Javascript e JSX - Button Component

```javascript
import React from 'react'

const Button = () => (
  <button>Olá =D{a}</button>
)

export default Button
```  
-------------  
### Exemplo 3 - Javascript e JSX - Events Manipulation　

```javascript
//Events Manipulation

const handleClick = (e, id) => {
    console.log('deletar cliente')
    alert(`ID do cliente: ${id}`)
  }

  const renderCustomers = (customer, index) => {
    return (
      <div key={`customer-${customer.id}`}>
        <li>{customer.name}  <button onClick={(e) => handleClick(e, customer.id)}>Deletar Cliente X</button></li>
        {customer.skills.map(renderSkills)}
      </div>
    )
  }
```  
-------------

### Exemplo 4 - HTML code

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>webpack 4 + babel</title>
</head>

<body>
  <div id="app"></div>
</body>

</html>
```
### Fim


