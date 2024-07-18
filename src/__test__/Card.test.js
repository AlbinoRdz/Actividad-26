import { render, screen,} from '@testing-library/react'
import '@testing-library/jest-dom';
import Card from '../components/ProductsContent/ProductCard/Card';




describe('Card Component', () => {
   const products = {
        name:'camisa',
        price:200,
        img:'www.google.com',
        description:'lorem impsum'
    }
    test('should render compontents', () => {
            
        render( <Card 
            name={products.name} 
            price={products.price} 
            img={products.img} 
            description={products.description} />)
        
        const nameElement = screen.getByText(products.name);
        const priceElement = screen.getByText(`$${products.price.toString()}`);
        const descriptionElement = screen.getByText(products.description);

        expect(nameElement).toBeInTheDocument();
        expect(priceElement).toBeInTheDocument();
        expect(descriptionElement).toBeInTheDocument();

    });
    
    
});