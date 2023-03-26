import React from 'react'
import { ArticleProps } from "../../helpers/interfaces" 
import { ListItem, ListItemText, Card } from '@mui/material'

const Article: React.FC<ArticleProps> = ({ art }) => { 
  

  return  (
  <ListItem>
    <Card variant='outlined' sx={{ mb: '10px' }}>
        <a href={art.url} style={{textDecoration: 'none'}} target='__blank'>
        <img src={art.urlToImage} alt={art.title} style={{width: '100%'}} />
        <ListItemText sx={{color: 'black'}}>{art.title}</ListItemText>
        </a>
    </Card>
  </ListItem>
    // <>
    //   <p>{art.url}</p>
    //   <p>{art.urlToImage}</p>
    //   <p>{art.title}</p>
    // </>
  );
}

export default Article

// sx - <MUI></MUI>
// style - html

// 1. Wyświetl komponent Article w HomePage
// 2. Stwórz plik interfaces.ts w folderze helpers, w tym pliku stwórz interface ArticleObj, w tym interfejsie umieść 3 własności: url, urlToImage, title, wszystkie 3 będą stringami. Do tego stwórz interface ArticleProps, będzie on rozszerzeniem ArticleObj z dodanym polem key (który będzie liczbą)
// 3. Przekaż jako props todaysArticles[0] do komponentu Article w HomePage
// 4. Odpowiednio otypuj i odbierz propsy w Article
// 5. Wyświetl url, urlToImage, title w równorzędnych tagach <p> w Article

//klucz 