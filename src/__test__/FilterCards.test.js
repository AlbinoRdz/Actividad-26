import React from "react";
import FilterCards from "../hooks/FilterCards";


describe('Name of the group', () => {
    const MockFilter = [
        { title: 'Televisor' },
        { title: 'Computadora' },
        { title: 'Teléfono' },
        { title: 'Tablet' },
        { title: 'Cámara' }
    ];
    it('should filter list', () => {
        const Filter = FilterCards(MockFilter,'m');
       
        expect(Filter).toEqual([ 
            { title:'Computadora' }, 
            { title:'Cámara' }
        ]);
        
    });
});