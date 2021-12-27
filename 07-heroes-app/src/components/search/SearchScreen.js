import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {

    const location = useLocation();
    const {q = ''} = queryString.parse(location.search);
    const [ formValues, handleInputChange] = useForm({
        searchText: q
    });
    const { searchText } = formValues;
    const heroesFilter = useMemo(() => getHeroesByName( searchText ), [q]);
    const handleSubmit = (e) => {   
        e.preventDefault();
        history.push(`?q=${ searchText }`)
    }

    return (
        <div>
            <h1>SearchScreen</h1>
            <hr/>

            <div className="row">

                <div className="col-5">
                    <h4> Search Form </h4>
                    <hr />

                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}
                        />
                    </form>

                    <button
                        type="submit"
                        className="btn mt-1 btn-block btn-outline-primary"    
                    >
                        Search...
                    </button>
               
                </div>

                <div className="col-7">
                    <h4> Results </h4>
                    <hr />
                    <div className="alert alert-info">
                        Search a hero
                    </div>

                   {
                    (q !== '' && heroesFilter.length === 0) 
                        && 
                    <div className="alert alert-danger">
                        There is no a hero with {q}
                    </div>
                    }

                    {
                        heroesFilter.map(hero => (
                            <HeroCard
                                key={ hero.id }
                                {...hero}    
                            />
                        ))
                    }
                </div>
           
            </div>
        </div>
    )
}
