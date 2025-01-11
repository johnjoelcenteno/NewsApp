import useCards from "../../hooks/useCards";
import PropTypes from "prop-types";
import "./cards.css";
import moment from "moment";

ContentHeader.propTypes = {
  title: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};
function ContentHeader({ title, status }) {
  let badgeColor = "";
  switch (status) {
    case "Success":
      badgeColor = "success";
      break;

    case "Failed":
      badgeColor = "danger";
      break;

    case "Upcomming":
      badgeColor = "success";
      break;
  }
  return (
    <>
      <div className="d-flex align-items-start">
        <span className="fw-bold title">{title}</span>
        <span
          className={`badge rounded-pill text-bg-info mx-3 text-bg-${badgeColor}`}
        >
          {status}
        </span>
      </div>
    </>
  );
}

Content.propTypes = {
  date: PropTypes.string,
  links: PropTypes.object,
  image: PropTypes.string,
  description: PropTypes.string,
};
function Content({ date, links, image, description }) {
  return (
    <>
      <div className="mt-1">
        <span>{date}</span>
        <div className="d-inline-flex mx-3">
          <a className="mx-2" href={links.video}>
            Article
          </a>
          |
          <a className="mx-2" href={links.article}>
            Video
          </a>
        </div>
      </div>

      <div className="mt-3">
        <div className="row">
          <div className="col-4">
            <img src={image} alt="thumbnail" className="img-fluid" />
          </div>
          <div className="col-8">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

Cards.propTypes = { news: PropTypes.object };
export default function Cards({ news }) {
  const { isShowContent, toggleContent } = useCards();
  return (
    <div className="card mt-5 mb-5 shadow">
      <div className="card-body">
        <ContentHeader title={news.title} status={news.status} />
        {isShowContent && news.status != "Failed" && (
          <>
            <Content
              date={moment(Date.now()).fromNow()}
              links={news.links}
              image={news.logo}
              description={news.description}
            />
          </>
        )}

        <div className="mt-3">
          <button
            className={`btn btn-primary ${
              news.status == "Failed" ? "disabled" : null
            }`}
            onClick={toggleContent}
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
}
