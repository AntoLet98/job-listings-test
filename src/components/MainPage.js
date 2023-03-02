import '../css/main-page.css';
import ArticleJob from './ArticleJob'
import FiltersBox from './FiltersBox'
import data from '../json/data.json'
import {useState, useEffect} from 'react';
import {articlebuttonsCategorys} from './ArticleJob'
 
function MainPage() {
  const [jogArticles, setJobArticles] = useState([]);
  const [categories, setCategories] = useState([]);
 
  const categoryClick = (categoryClicked) => {
    if (!categories.includes(categoryClicked)) {
      setCategories([...categories, categoryClicked]);
    }
  }
  const categoryRemove = (categoryRemove) => {
    setCategories(categories.filter(item => item !== categoryRemove));
    console.log(categories);
  }
  useEffect(() => {
    setJobArticles(data);
  }, []);
  useEffect(() => {
    const jobs = [];
    for(const job of jogArticles) {
      const allCategories = articlebuttonsCategorys(job);
      const categoriesEl = allCategories.map(el => el.toLowerCase());
      for (const category of categories) {
        if (categoriesEl.includes(category)) {
          jobs.push(job);
        } else {
          const index = jobs.indexOf(job);
          if (index > -1) {
            jobs.splice(index, 1);
          }
        }
      }
    }
    const jobsWrapper = jobs.filter((item, index) => jobs.indexOf(item) === index);
    if (jobsWrapper.length > 0) {
      setJobArticles(jobsWrapper);
    }
  }, [categories]);
  return (
    <main className='page'>
      <FiltersBox data={categories} categoryRemove={categoryRemove}/>
      {
        jogArticles.map((element) => {
          return <ArticleJob data={element} key={element.id} onHandleClick={categoryClick}/>
        })
      }
    </main>
  );
}
 
export default MainPage;