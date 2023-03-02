import '../css/main-page.css';
import ArticleJob from './ArticleJob'
import data from '../json/data.json'
import {useState, useEffect} from 'react';

function MainPage() {
  const [jogArticles, setJobArticles] = useState([]); 
  const categoryClick = (elementCategory) => {
    // const elementCategory = elementCategory.toLowerCase();
    // jogArticles.filter(element => elementCategory)
  }
  useEffect(() => {
    setJobArticles(data)
  }, [])
  return (
    <main className='page'>
      {
        jogArticles.map((element) => {
          return <ArticleJob data={element} key={element.id} onHandleClick={categoryClick}/>
        })
      }
    </main>
  );
}

export default MainPage;
