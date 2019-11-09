import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Track from './components/Track/track';
import Album from './components/Album/album';
import Artist from './components/Artist/artist';

it('Renderizado sem problemas', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('Testando lista de faixas', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Track track={{name:'Teste', id:'Teste',preview_url:'url',artists:[{name:'Artista'}],album:{images:[,,{url:'url'}]}}} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('Testando lista de albuns', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Album albums={{id:'id',images: [,,{url:'url'}], name:'Teste',type:'Teste'}} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('Testando lista de artistas', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Artist artists={{id:'id',images: [,,{url:'url'}], name:'Teste',type:'Teste'}} />, div);
    ReactDOM.unmountComponentAtNode(div);
});