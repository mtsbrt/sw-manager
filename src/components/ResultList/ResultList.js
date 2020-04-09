import React from 'react';
import './resultList.css'

export default function ResultList(props) {

    const results = props.items;

    return (
        <div>
            {results.length > 0 &&
                <div>
                    <h2>Lista de Destinos</h2>
                    <ol>
                        {results.map((result, index) => (
                            <li key={index}>{result.description || 'Situação não Identificada'} em {result.planet || 'Planeta Desconhecido'}</li>
                        ))}
                    </ol>
                </div>
            }

        </div>
    )
}