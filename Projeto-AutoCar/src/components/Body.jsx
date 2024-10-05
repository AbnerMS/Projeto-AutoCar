import React from 'react';

function Body({ 
  products, handleEdit, handleDelete, name, price, year, marca, setName, setPrice, setYear, setMarca, editMode, handleSubmit 
}) {
  return (
    <main className="body">
      {/* Container dos cards */}
      <div className="container">

        {/* Card para a lista de produtos */}
        <div className="products-card">
          <h2>Veículos Catalogados</h2>
          <ul className="product-list">
            {products.map((product) => (
              <li key={product.id} className="product-item">
                <div className="product-details">
                  <h2>{product.marca} {product.name} - {product.year}</h2>
                  <h3>R$ {product.price}</h3>
                </div>
                <div className="product-actions">
                  <button id='edit' onClick={() => handleEdit(product)}>Editar</button>
                  <button id='delete' onClick={() => handleDelete(product.id)}>Deletar</button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Card para o formulário */}
        <div className='form-card'>
          <h2>{editMode ? "Editar Veículo" : "Adicionar Veículo"}</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Nome:
              <input
                id='nome'
                placeholder=''
                type="text"
                value={name}
                name='name'
                onChange={(e) => setName(e.target.value)}
                required
                minLength="2"
              />
            </label>
            <label>
              Marca:
              <input
                id='marca'
                placeholder=''
                type="text"
                value={marca}
                name='marca'
                onChange={(e) => setMarca(e.target.value)}
                required
                minLength="2"
              />
            </label>
            <label>
              Ano:
              <input
                id='ano'
                type="number"
                value={year}
                name='year'
                onChange={(e) => setYear(e.target.value)}
                required
                min="1900"
                max="2024"
              />
            </label>
            <label>
              Preço:
              <input
                id='preco'
                type="text"
                value={price}
                name='price'
                onChange={(e) => setPrice(e.target.value)}
                required
                min="1"
              />
            </label>
            <input type="submit" id='submit' value={editMode ? "Atualizar" : "Criar"} />
          </form>
        </div>
      </div>
    </main>
  );
}

export default Body;