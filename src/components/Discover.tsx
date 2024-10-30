import { useParams } from "react-router-dom"

const Discover = () => {
  const params = useParams()
  
  return (
    <div className="column-left">
      <div className="discover-page">
        <a className="discover-img" href="/">
          <img src="https://maxweb.vn/wp-content/uploads/2020/05/anh-nen-website-bat-dong-san-dep-1.png" alt="" />
        </a>
        <h2 className="discover-list">DISCOVER</h2>
        <a className="discover-item" href="/discover/Popular">
          <div className="discover-add">
          <i className="fa-solid fa-heart"></i>
          Popular
          </div>
        </a>
        <a className="discover-item" href="/discover/Top%20Rated">
          <div className="discover-add">
          <i className="fa-solid fa-signal-bars"></i>
            Top Rated
          </div>
        </a>
        <a className="discover-item" href="/discover/Upcoming">
          <div className="discover-add">
            <i className="fa-solid fa-calendar-days"></i>
            Upcoming
            </div>
        </a>
        <h2 className="discover-list">GENRES</h2>
        <a className="discover-item" href="/discover/Upcoming">
          <div className="discover-add">
          <i className="fa-solid fa-circle-stop"></i>
            Action
            </div>
        </a>
        <a className="discover-item" href="/discover/Upcoming">
          <div className="discover-add">
          <i className="fa-solid fa-circle-stop"></i>
            Adventure
            </div>
        </a>
        <a className="discover-item" href="/discover/Upcoming">
          <div className="discover-add">
          <i className="fa-solid fa-circle-stop"></i>
            Animation
            </div>
        </a>
        <a className="discover-item" href="/discover/Upcoming">
          <div className="discover-add">
          <i className="fa-solid fa-circle-stop"></i>
            Comedy
            </div>
        </a>
        <a className="discover-item" href="/discover/Upcoming">
          <div className="discover-add">
          <i className="fa-solid fa-circle-stop"></i>
            Crime
            </div>
        </a>
        <a className="discover-item" href="/discover/Upcoming">
          <div className="discover-add">
          <i className="fa-solid fa-circle-stop"></i>
            Documentary
            </div>
        </a>
        <a className="discover-item" href="/discover/Upcoming">
          <div className="discover-add">
          <i className="fa-solid fa-circle-stop"></i>
            Drama
            </div>
        </a>
        <a className="discover-item" href="/discover/Upcoming">
          <div className="discover-add">
          <i className="fa-solid fa-circle-stop"></i>
            Family
            </div>
        </a>
        <a className="discover-item" href="/discover/Upcoming">
          <div className="discover-add">
          <i className="fa-solid fa-circle-stop"></i>
            Fantasy
            </div>
        </a>
        <a className="discover-item" href="/discover/Upcoming">
          <div className="discover-add">
          <i className="fa-solid fa-circle-stop"></i>
            History
            </div>
        </a>
        <a className="discover-item" href="/discover/Upcoming">
          <div className="discover-add">
          <i className="fa-solid fa-circle-stop"></i>
            Horror
            </div>
        </a>
        <a className="discover-item" href="/discover/Upcoming">
          <div className="discover-add">
          <i className="fa-solid fa-circle-stop"></i>
            Music
            </div>
        </a>
        <a className="discover-item" href="/discover/Upcoming">
          <div className="discover-add">
          <i className="fa-solid fa-circle-stop"></i>
            Mystery
            </div>
        </a>
        <a className="discover-item" href="/discover/Upcoming">
          <div className="discover-add">
          <i className="fa-solid fa-circle-stop"></i>
            Romance
            </div>
        </a>
        <a className="discover-item" href="/discover/Upcoming">
          <div className="discover-add">
          <i className="fa-solid fa-circle-stop"></i>
            Science Fiction
            </div>
        </a>
        <a className="discover-item" href="/discover/Upcoming">
          <div className="discover-add">
          <i className="fa-solid fa-circle-stop"></i>
            TV Movie
            </div>
        </a>
        <a className="discover-item" href="/discover/Upcoming">
          <div className="discover-add">
          <i className="fa-solid fa-circle-stop"></i>
            Thriller
            </div>
        </a>
        <a className="discover-item" href="/discover/Upcoming">
          <div className="discover-add">
          <i className="fa-solid fa-circle-stop"></i>
            War
            </div>
        </a>
        <a className="discover-item" href="/discover/Upcoming">
          <div className="discover-add">
          <i className="fa-solid fa-circle-stop"></i>
            Western
            </div>
        </a>
      </div>
    </div>
  )
}

export default Discover
