import React from "react";

const buttonA = <button>Histórico dos Clientes</button>

const buttonB = <button>Cadastrar Cliente</button>

const hasCustomer = true

const App = () => {

  const renderShowHistory = (
    <div>
      Clique no botão abaixo para visualizar o histórico dos clientes
      <br />
      <br />
      {buttonA}
    </div>
  )

  const renderAddCustomer = (
    <div>
      Clique abaixo para cadastrar o cliente
      <br />
      <br />
      {buttonB}
    </div>
  )

  const showCustomer = () => {

    if (!hasCustomer) return null

    return (
      <div>
        <h4>Nome do Cliente: João Erick Barbosa</h4>
        <h4>Nome do Cliente: Roberto Santos</h4>
        <h4>Nome do Cliente: Pedro Carvalho</h4>
      </div>
    )
  }

  console.log('hasCustomer', hasCustomer)


  return (
    <div>
      <h1>Consulta de clientes</h1>
      <h2>Bem vindo à página inicial.</h2>
      {hasCustomer ? renderShowHistory : renderAddCustomer} {/* Exibe o botão e o histórico de clientes se existir hasCostumer, senão mostra o botão de cadastrar e não renderiza o elemento cliente. */}
      <div>
        {showCustomer()}
      </div>
    </div>
  );
};
export default App;