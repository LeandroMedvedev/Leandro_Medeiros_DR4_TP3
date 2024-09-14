import styles from './style.module.css';

const {
  category,
  container,
  buttonContainer,
  categoryContainer,
  costPriceContainer,
  mainContainer,
  productDescriptionContainer,
  productNameContainer,
  salePriceContainer,
  supplierContainer,
  costPrice,
  productDescription,
  productName,
  salePrice,
  customSelect,
  supplier,
  title,
} = styles;

function Exercise04() {
  return (
    <div className={container}>
      <h1 className={title}>Cadastro de Produtos</h1>

      <div className={productNameContainer}>
        <label htmlFor="productName">Nome do Produto</label>
        <input id={productName} placeholder="Informe o nome do produto" />
      </div>

      <div className={mainContainer}>
        <div className={salePriceContainer}>
          <label htmlFor="salePrice">Preço de venda</label>
          <input
            type="number"
            id={salePrice}
            placeholder="Informe o preço de venda"
          />
        </div>

        <div className={costPriceContainer}>
          <label htmlFor="costPrice">Preço de custo</label>
          <input
            type="number"
            id={costPrice}
            placeholder="Informe o preço de custo"
          />
        </div>

        <div className={supplierContainer}>
          <label htmlFor="supplier">Fornecedor</label>
          <div className={customSelect}>
            <select id={supplier} defaultValue="">
              <option value="" disabled hidden>
                Selecione um fornecedor
              </option>
              <option>Brooks Brothers</option>
              <option>Hermès</option>
              <option>Mr Porter</option>
              <option>Charles Tyrwhitt</option>
            </select>
          </div>
        </div>

        <div className={categoryContainer}>
          <label htmlFor="category">Categoria</label>
          <div className={customSelect}>
            <select id={category} defaultValue="">
              <option value="" disabled hidden>
                Selecione uma categoria
              </option>
              <option>Camisas</option>
              <option>Calças</option>
              <option>Bolsas</option>
              <option>Acessórios</option>
              <option>Outlet</option>
            </select>
          </div>
        </div>
      </div>

      <div className={productDescriptionContainer}>
        <label htmlFor="productDescription">Descrição do Produto</label>
        <textarea
          id={productDescription}
          placeholder="Informe a descrição do produto"
        ></textarea>
      </div>

      <div className={buttonContainer}>
        <button>Salvar</button>
      </div>
    </div>
  );
}

export default Exercise04;
