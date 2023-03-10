import '../css/main-page.css';
import ArticleJob from './ArticleJob'
import FiltersBox from './FiltersBox'
import data from '../json/data.json'
import {useState, useEffect} from 'react';
import {articlebuttonsCategorys} from './ArticleJob'
 
function MainPage() {
  const [jobArticles, setJobArticles] = useState([]);
  const [categories, setCategories] = useState([]);
 
  const categoryClick = (categoryClicked) => {
    if (!categories.includes(categoryClicked)) {
      setCategories([...categories, categoryClicked]);
    }
  }
  const categoryRemove = (categoryRemove) => {
    setCategories(categories.filter(item => item !== categoryRemove));
    setJobArticles(data);
  }
  const clearAll = () => {
    setCategories([]);
  }
  
  useEffect(() => {
    setJobArticles(data);
  }, []);
  useEffect(() => {
    const jobs = [];
    for(const job of jobArticles) {
      const allCategories = articlebuttonsCategorys(job);
      const categoriesEl = allCategories.map(el => el.toLowerCase());
      for (const category of categories) {
        if (categoriesEl.includes(category)) {
          !jobs.includes(job) && jobs.push(job);
        } else {
          const index = jobs.indexOf(job);
          if (index > -1) {
            jobs.splice(index, 1);
          }
        }
      }
    }
    
    if (jobs.length > 0) {
      setJobArticles(jobs);
    }
    if (categories.length === 0) {
      setJobArticles(data);
    }
  }, [categories]);
  return (
    <main className='page'>
      {categories.length > 0 &&
        <FiltersBox data={categories} categoryRemove={categoryRemove} clearAll={clearAll}/>
      }
      {
        jobArticles.map((element) => {
          return <ArticleJob data={element} key={element.id} onHandleClick={categoryClick}/>
        })
      }
    </main>
  );
}
 
export default MainPage;