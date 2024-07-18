import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../components/Header";

describe('Header Component', () => {
    
    it('should render Header Components', () => {
        const HeaderRender = render(
        <MemoryRouter>
            <Header />
        </MemoryRouter> 
    );
   
    const HeaderTitle = HeaderRender.getByText('Tienda en linea Lorem Ipsum');
    const HeaderHome = HeaderRender.getByText('Volver a la página principal');
    const HeaderProducts = HeaderRender.getByText('Conozca nuestros productos');
    
    expect(HeaderTitle).toBeInTheDocument();
    expect(HeaderHome).toBeInTheDocument();
    expect(HeaderProducts).toBeInTheDocument();

    });
});