import { TextField } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { SearchFormData , SearchFormProps} from '../../helpers/interfaces'
import { Button } from '@mui/material'
// 1. Import i wywołanie useForm (z odpowiednim interfejsem)
// 2. Stwórz pustą funkcję liftKeywordUp
// 3. JSX:
// - <form> (HTML) onSubmit tak jak wcześniej, w style: display flex, flexDirection column
// W środku forma:
// - TextField (MUI) placeholder Keyword, zarejestruj pod nazwą keyword, w sx'ach: my .5rem, display block, mx auto
// - Button (MUI) variant contained, type submit, sx: display block, mx auto. TextContent: Search
// 4. Wartość inputu to string, stwórz odpowiedni interface i przypisz do wywołania useForm i do funkcji liftKeywordUp, w liftKeywordUp console.log(*dane*)
 



const SearchForm: React.FC<SearchFormProps> = ({setKeyword}) => {
    const {register, handleSubmit} = useForm<SearchFormData> () 
    const liftKeywordUp = ({ keyword }: SearchFormData) =>{
        setKeyword(keyword)
    }
  return (
    <form
      onSubmit={handleSubmit(liftKeywordUp)}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <TextField
        placeholder="Keyword"
        sx={{
          display: "block",
          mx: "auto",
          my: ".5rem",
        }}
        {...register("keyword", { required: true })}
      ></TextField>
      <Button
        variant="contained"
        type="submit"
        sx={{ display: "block", mx: "auto", }}
      >
        Search
      </Button>
     
    </form>
  );
}

export default SearchForm  