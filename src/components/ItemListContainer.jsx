import Items from './Items/Items';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    return (
        <div className="App">
          <main>
                <section id="products">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 pb-3">
                                <h2>Bienvenidos a la tienda THE FRUIT!</h2>
                            </div>
                            <Items />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default ItemListContainer;