
import React, { useContext } from 'react';
import { CreateProduct } from '../component/CreateProduct';
import { ErrorMessage } from '../component/errorMessage';
import { Loader } from '../component/loader';
import { Modal } from '../component/Modal';
import {Product} from '../component/Product'
import { ModalContext } from '../Context/ModalContext';
import { useProducts } from '../hooks/products';
import { IProduct } from '../models';


export function ProductPage() {
    const {loading, products, error, addProduct} = useProducts()

  // const [modal, setModal] = useState(false)

  const {modal, open, close} =  useContext(ModalContext)

  

  const createHendler = (product: IProduct) => {
    close()
    addProduct(product)
  }

  
  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      { loading && <Loader /> }
      { error && <ErrorMessage error={error}/> }
      { products.map( product => <Product product={product} key={product.id}/>) }

      {modal && <Modal title='Create new product' onClose={close}>
        <CreateProduct onCreate={createHendler}/>
      </Modal>}
      
      <button className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2'
      onClick={open}
      >+</button>
    </div>
  )

}