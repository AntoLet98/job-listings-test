import '../css/main-page.css';
import ArticleJob from './ArticleJob'
import data from '../json/data.json'
function MainPage() {
  return (
    <main className='page'>
      {
        data.map((element) => {
          return <ArticleJob data={element} key={element.id}/>
        })
      }
    </main>
  );
}

export default MainPage;
