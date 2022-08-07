import { useEffect, useState } from 'react';
import { ProductItem } from './components/ProductItem';
import { HomeContainer } from './styles';

const data = [
  {
    id: '0b404544-0f52-4889-953c-da7ce7effea3',
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    image: 'traditional-espresso.png',
    categories: ['tradicional'],
    price: 9.9,
  },
  {
    id: '320a2ab4-33a2-435c-a5c6-f0b5a4098f47',
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    image: 'american-espresso.png',
    categories: ['tradicional'],
    price: 9.9,
  },
  {
    id: 'a3aa8f48-ca25-47d1-be2d-5db78fc68972',
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    image: 'creamy-espresso.png',
    categories: ['tradicional'],
    price: 9.9,
  },
  {
    id: 'c09eef30-58ce-4a8d-99f8-d097e8779e2f',
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    image: 'iced-espresso.png',
    categories: ['tradicional', 'gelado'],
    price: 9.9,
  },
  {
    id: 'b5b2a786-1a9f-4350-81f0-610a57ef951b',
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    image: 'coffee-with-milk.png',
    categories: ['tradicional', 'com leite'],
    price: 9.9,
  },
  {
    id: 'b6a5a9ad-b540-40bd-bf68-4a085a33c0be',
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    image: 'latte.png',
    categories: ['tradicional', 'com leite'],
    price: 9.9,
  },
  {
    id: 'cd590255-3af7-44d1-bfcf-e946a95960f1',
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    image: 'capuccino.png',
    categories: ['tradicional', 'com leite'],
    price: 9.9,
  },
  {
    id: 'e84d8e0e-a99f-4e0b-8aac-4b4946096c2c',
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    image: 'macchiato.png',
    categories: ['tradicional', 'com leite'],
    price: 9.9,
  },
  {
    id: 'c560538e-2578-44ec-aa59-b10b80d9229f',
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    image: 'mocaccino.png',
    categories: ['tradicional', 'com leite'],
    price: 9.9,
  },
  {
    id: '8728e493-fd7e-4f11-8aa3-a9336349dcfe',
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    image: 'hot-chocolate.png',
    categories: ['especial', 'com leite'],
    price: 9.9,
  },
  {
    id: 'e4d54e68-1755-4d88-b1dc-64a753b138f9',
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    image: 'cubano.png',
    categories: ['especial', 'alcoólico', 'gelado'],
    price: 9.9,
  },
  {
    id: 'ec781b15-62ff-4d0e-b2a8-566850f83802',
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    image: 'havaiano.png',
    categories: ['especial'],
    price: 9.9,
  },
  {
    id: '9982a0ea-cc1a-4566-b2e3-672107fe5ba4',
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    image: 'arabe.png',
    categories: ['especial'],
    price: 9.9,
  },
  {
    id: 'd0e6c71f-d297-48b4-9842-0795ea0f3d54',
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    image: 'irlandes.png',
    categories: ['especial', 'alcoólico'],
    price: 9.9,
  },
];

type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  categories: string[];
  price: number;
};

export function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(data);
  }, []);

  return (
    <HomeContainer>
      <h2>Nossos cafés</h2>

      <ul>
        {products.map(({ id, name, description, image, categories, price }) => (
          <li key={id}>
            <ProductItem
              id={id}
              name={name}
              description={description}
              image={image}
              categories={categories}
              price={price}
            />
          </li>
        ))}
      </ul>
    </HomeContainer>
  );
}
