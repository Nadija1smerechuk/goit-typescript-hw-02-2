import React, { useState } from 'react';
import css from './SearchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';




export default function SearchBar({ onSubmit }: { onSubmit: (query: string) => void }){
  const [query, setQuery] = useState<string>('');

  const handlCeange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(evt.target.value)
  };
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (!query.trim()) {
      toast.error("Please enter text to search for images")
      return;
    }
    onSubmit(query);
    setQuery('');
  }

  return (
    <header className={css.container}>
        <form className={css.wraper} onSubmit={handleSubmit}>
          <input className={css.input}
            type="text"
            name="query"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            value={query}
            onChange={handlCeange}
          />
          <button className={css.button} type="submit">Search</button>
        </form>
      
      <Toaster />
    </header >
  );
}