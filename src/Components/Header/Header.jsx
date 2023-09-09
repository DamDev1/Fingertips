import "./Header.scss"
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SideNav from "../SideNav/SideNav";
export default function Header() {
  return (
    <header>
      <nav>
        <div className="logo-and-cart">
          <div className="logo">Fingertips</div>
          <div className="cart">
            <ShoppingCartOutlinedIcon />
            <span>Cart</span>
          </div>
        </div>

        <div className="search-bar-container">
          <div className="search-bar">
            <div className="serach-icon">
              <SearchIcon style={{ color: "gray" }} />
            </div>
            <input type="search" placeholder="Search for anything" />
            <button>Search</button>
          </div>
        </div>

        <div className="right-nav">
          <div className="user">
            <PersonOutlineIcon />
          </div>
          <div className="favourite">
            <FavoriteBorderIcon />
          </div>
          <div className="cart">
            <ShoppingCartOutlinedIcon />
            <span>Cart</span>
          </div>
        </div>
      </nav>
      <div className="sideNav">
      <div className="close-nav-bar">X</div>
        <SideNav/>
      </div>
    </header>
  )
}
