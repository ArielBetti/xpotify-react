import React from 'react';

export default function Search(props) {
    function preventsubmit(event) {
        event.preventDefault();
    }

    return (
        <form
            onSubmit={preventsubmit}
            className="BuscadorContainer">
            <input type="text"
                className="Buscador"
                placeholder="Busque por artistas ou músicas"
                onKeyUp={props.onKeyUp}
            />
            <button><img src={props.search} alt="" /></button>
        </form>
    );
}