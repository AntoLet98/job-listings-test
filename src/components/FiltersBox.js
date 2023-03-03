import '../css/filters-box.css';
import iconClose from '../images/icon-remove.svg'

function FiltersBox({data, categoryRemove, clearAll}) {
  const pageMain = document.querySelector('.page');
  if (data.length > 0) {
    pageMain.classList.add('category-open')
  } else if (pageMain && pageMain.classList.contains('category-open')) {
    pageMain.classList.remove('category-open')
  }
  return (
    <div className="category-job__container">
      <div className="category-job__buttons">
        {data.map((element, index) => {
          return  <div className="filter-button" key={index}>
                    <p className="text-filter-button">{element}</p> 
                    <button className="button-remove-filter" type="button" onClick={() => categoryRemove(element.toLowerCase())}><img src={iconClose} alt="close" /></button>
                  </div>
        })}
      </div>
      <button className="category-job__remove-all" onClick={clearAll}>Clear</button>
    </div>
  );
}
 
export default FiltersBox;