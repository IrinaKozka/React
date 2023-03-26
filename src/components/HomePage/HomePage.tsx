import { useEffect, useState } from 'react'
import axios from 'axios';
import { API_KEY } from '../../helpers/helpers';
import { Typography, List } from '@mui/material';
import Article from '../Article/Article';
import { ArticleObj } from '../../helpers/interfaces';
import { request } from 'http';



//d93625de8960490a9ef9157d59148c72

const HomePage= () => {
  const [todaysArticles, setTodaysArticles] = useState([]);
  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const day =
      today.getDate() - 1 < 10
        ? `0${today.getDate() - 1}`
        : today.getDate() - 1;
    const month =
      today.getMonth() + 1 < 10
        ? `0${today.getMonth() + 1}`
        : today.getMonth() + 1;
    //   const month = today.getMonth() + 1;
    //   const day = today.getDate() - 1;

    //   if (month < 10) {`0${month}`} else {`${month}`}
    //   if (day < 10) {`0${day}`} else {`${month}`}
    const date = `${year}-${month}-${day}`;

    axios
      .get(
        `https://newsapi.org/v2/everything?q=world&from=${date}&language=en&sortBy=popularity&apiKey=${API_KEY}`
      )

      .then((response) => {
        setTodaysArticles(response.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });

    // return () => { clean up , wykonuje sie po odmontowaniu
    // //   console.log("123");
    // };

    // 1. Stwórz stan todaysArticles (funckja aktualizujaca stan będzie sie nazywala setTodaysArticles), wartość początkowa: [] (pusta lista)
    // 2. Do axios.get dopisz thena, w którym wrzucisz zwrócone z API dane do stanu todaysArticles (dane o ktore nam chodzi to lista artykułow, jest ona zagnieżdzona na 2 poziome w responsie, najpierw wyloguj response i poszukaj)
    // 3. Dopisz catcha, w srodku console.log blad
    // 4. Zauważ różnice w działaniu axiosa i fetcha, zapisz tą różnice
  }, []);
  console.log(todaysArticles);

  // Komponent Typography (MUI)
  // 1. Typography to komponent służący do wyświetlania tekstu
  // 2. Przyjmuje kilka ważnych atrybutów: variant="h2", component="h2", align="center", sx (atrybut wszystkich komponentów MUI, i tylko komponentów MUI) to atrybut do którego możemy przekazać obiekt i pisać w nim CSS
  // p = padding, m = margin, mt = marginTop, mb = marginBottom, mx = margin w osi X (marginLeft + marginRight), my = margin w osi Y (marginTop + marginBottom)
  // <Button
  //   variant="outlined"
  //   component="button"
  //   align="center"
  //   sx={{ display: "block", mx: "auto" }}
  // >12332112331</Button>;

  // Komponent List (MUI) = <ul> z HTML'a przystosowany tak, żeby łatwiej się go stylowało

  {/* Wyświetl Typography, ma wyglądać jak h2, ma być wyśrodkowany, wielkość czcionki ma być ustawiona na 2rem, margines dolny ma być ustawiony .8rem, wyświetlany tekst: "Today's hottest news:" */}
      {/* Wyświetl List (komponent z MUI), ustaw jej szerokość na 100%, i wyśrodkuj jej kontent */}
  return (
    <>
      <Typography
        variant="h2"
        align="center"
        sx={{
          fontSize: "2rem",
          my: ".8rem",
          color: "pink",
          mx: "auto",
        }}
      >
        Today's hottest news:
      </Typography>
       <List sx={{ width: "100%", alignContent: "center" }}> 
     {todaysArticles.length !== 0 &&
      todaysArticles.map((article: ArticleObj) => {
          return <Article art={article} key={article.title} />;
        })}
        {/* renderowanie warunkowe && albo if?
        todaysArticles.length !==
        to z mapa wracana lista to wartosc prawdziwa */}
        </List>
  
    </>
  );


}
export default HomePage

// Sciaganie newsow z Api oraz ich wyswietlenie
// useEffect
// axios

// praca z api w react
// (fetch, axios,)----requesty(do zapytan) , react query - tez do requestow klient http z klientem stanu
// axios bardziej o wiele bardziej rozbudowany fetch, instancje, url, middlware
