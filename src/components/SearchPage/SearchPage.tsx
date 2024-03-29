import React from 'react'
import { useState } from 'react';
import { List } from '@mui/material';
import axios from 'axios'
import { API_KEY } from '../../helpers/helpers';
import { useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Article from '../Article/Article';
import { ArticleObj } from '../../helpers/interfaces';


// 1. Stwórz stan keyword, wartość początkowa ''
// 2. Stwórz stan articles, wartość początkowa []
// 3. Wywołaj useEffect, zapełniona lista dependencji, reakcja na zmiane keyword
// W UE:
// 4. Stwórz ifa w którym sprawdzisz czy keyword jest różny od pustego stringa
// W ifie:
// 5. Strzał do API axiosem, url: newsapi.org/v2/everything?q=*tutaj dynamicznie wstawiany stan keyword*&from=2022-11-14&language=en&sortBy=popularity&apiKey=${API_KEY}
// 6. Do wywołania axiosa przypnij thena, w thenie wywołanie setArticles(data.data.articles), parametr thena nazwij data
// JSX:
// - Wyświetlenie SearchForm
// - List (MUI) sx: width 100%, bgcolor: background.paper, alignContent center
 
const SearchPage = () => {
  const [ keyword, setKeyword] = useState('')
  const [ articles, setArticles ] = useState([])
  useEffect(() => {
 if (keyword !== '' )  {
axios
   .get(
        `https://newsapi.org/v2/everything?q=${keyword}&from=2022-11-14&language=en&sortBy=popularity&apiKey=${API_KEY}`
      )
//    /*dynamicznie wstawiany stan keyword?/*

      .then((data) => {
        setArticles(data.data.articles);
      })
      .catch((err) => 
        console.log(err));
      }

    }, [keyword])



  return (
    <>
    <SearchForm setKeyword={setKeyword} />
    <List 
    sx={{width: '100%',
         bgcolor: 'background.paper', alignContent:'center'}}
    >
{articles.length > 0 && articles.map ((article: ArticleObj)=> {
    return <Article art={article} key={article.title} /> ;
})}
    </List>
    </>
  )
}

export default SearchPage
{/* // 1. Przekaż propsem do SearchForma setKeyword (odpowiednio otypuj) i przyjmij w parametrze w SearchForm
// 2. W SearchForm wywołaj setKeyword w funkcji liftKeywordUp, do setKeyword podaj po prostu keyword zwracany z formularza
// 3. W List (u mnie linia 27) stwórz renderowanie warunkowe które będzie zależne od tego czy stan articles ma długość większą niż 0. Jeżeli warunek jest prawdziwy, wywołaj (cały czas w JSX'ie) metodę .map() na stanie articles.
// 4. .map() :
// - do tego mapa będą wpadać pojedyńcze artykuły z api, więc parametrem będzie 1 artykuł (nazwij jak chcesz)
// - z mapa zwracaj komponent Article, przekaż mu artykuł z parametru mapa, klucz według uznania, musi być stringiem i musi być unikalny
// - nie zapomnij że w mapie potrzebny jest return!



// STATE LIFTING - wnoszenie stanu do komponentu wyżej / przekazywanie informacji z komponentu dziecka do rodzica
// 1. Musimy mieć jakiś stan w komponencie rodzicu
// 2. Musimy przekazać funkcję aktualizującą stan do komponentu dziecka (props/context/redux/czymkolwiek czy sie da). W przypadku propsów pamiętaj o interfejsie (typ: (value: *tu typ zmiennej stanowej* => void)) i o odebraniu funkcji w child component w parametrze.
// 3. W środku child component wywołujemy funkcję (pkt 2), funkcja ta zawsze (!) będzie wiedzieć który stan w którym komponencie ma zaktualizować. Zmienna stanowa i setter są zawsze ze sobą związane, niezależnie gdzie się znajdą. */}