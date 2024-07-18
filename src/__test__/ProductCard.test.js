import React from "react";
import ProductCard from "../components/ProductsContent/ProductCard";
import { render, screen } from "@testing-library/react";
import useAxiosHook from "../hooks/useAxiosHook";


// jest.mock('../hooks/useAxiosHook', () => ({
    
//     useAxiosHook: jest.fn(() => ({
//         getAxios: [
//             {
//                 name: 'camisa',
//                 price: 200,
//                 img: 'www.facebook.com',
//                 description: 'lorem ipsum'
//             },
//             {
//                 name: 'pantalones',
//                 price: 300,
//                 img: 'www.intagram.com',
//                 description: 'lorem ipsum dolor'
//             },
//             {
//                 name: 'zapatos',
//                 price: 400,
//                 img: 'www.twitter.com',
//                 description: 'lorem ipsum sit amet'
//             },
//             {
//                 name: 'chaqueta',
//                 price: 500,
//                 img: 'www.tiktok.com',
//                 description: 'lorem ipsum consectetur'
//             }
//         ]
//     }))
// }));

jest.mock('../hooks/useAxiosHook.js', () => ({
    __esModule: true,
    default: jest.fn()
}));

describe('ProductCard Component', () => {
    beforeEach(() => {
        const mockData = [
            {
                id:1,
                title: 'camisa',
                price: 200,
                img: 'www.facebook.com',
                description: 'lorem ipsum'
            },
            {
                id:2,
                title: 'pantalones',
                price: 300,
                img: 'www.intagram.com',
                description: 'lorem ipsum dolor'
            },
            {
                id:3,
                title: 'zapatos',
                price: 400,
                img: 'www.twitter.com',
                description: 'lorem ipsum sit amet'
            },
            {
                id:4,
                title: 'chaqueta',
                price: 500,
                img: 'www.tiktok.com',
                description: 'lorem ipsum consectetur'
            }
        ];

  
        useAxiosHook.mockReturnValue({ getAxios: mockData });
    });

    it('should render card component', () => {
        
        render(<ProductCard />)
        const productTitle = screen.getByText('camisa');
        expect(productTitle).toBeInTheDocument();
        
       
        
    });
});
