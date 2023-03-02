import '../css/article-job.css';

function articlebuttonsCategorys (data) {
  const buttonsArray = [];
  buttonsArray.push(data.languages, data.level, data.role, data.tools);

  return buttonsArray.flat();
}

function ArticleJob(dataElement) {
  const data = dataElement.data;
  const nameLogo = data.logo.split('/');
  const buttonsCategorys = articlebuttonsCategorys(data);
  return (
    <div className="article-job__container">
      <div className="article-job__img">
        <img src={require(`../images/${nameLogo[2]}`)} alt={data.company} />
      </div>
      <div className="article-job__informations">
        <div className="article-job__description d-flex">
          <p>{data.company}</p>
          {data.new && (
            <span className="tag-btn">New!</span>
          )}
          {data.featured && (
            <span className="tag-btn secondary">Feature</span>
          )}
        </div>
        <h2 className="article-job__title">{data.position}</h2>
        <div className="article-job__details">
          <p>{data.postedAt}</p>
          <span className="marker">&#8226;</span>
          <p>{data.contract}</p>
          <span className="marker">&#8226;</span>
          <p>{data.location}</p>
        </div>
      </div>
      <div className="article-job__categorys">
        {buttonsCategorys.map((element, index) => {
          return <button className="btn-category-article js-btn-category-article" type="button" data-category={element} key={index}>{element}</button>
        })}
      </div>
    </div>
  );
}

export default ArticleJob;