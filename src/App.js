import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import ProductsView from './components/ProductsView';
import { Routes, Route, Link } from 'react-router-dom';
import Cart from './components/Cart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// header
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuery } from './components/reduc-components/ProductSlice';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  // width:"500px",
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '40ch',
      '&:focus': {
        width: '40ch',
      },
    },
  },
}));
// header

function App() {
  const Products = useSelector((state) => state.product.PRODUCTS);
  const dispatch = useDispatch();

  const searchHandler = (event) => {
    Products.filter(product => product.name.includes(event.target.value));
    dispatch(updateQuery(event.target.value.trim()));
  }
  return (
    <div className="App">

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <Link to="/">
                <MenuIcon />
              </Link>
            </IconButton>
            {/* <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            > */}

              <img src='https://play-lh.googleusercontent.com/q8hxnbpJCYfHipSOG_5tZe5jK_89T6QIsqrEklvGpMFKH8b98pDHJf2tPcn2bxEN96ON' style={{ height: "40px" }} />
            {/* </Typography> */}
            <div style={{marginLeft:"300px"}}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                  onChange={searchHandler}
                />
              </Search>
            </div>
            <Link to="cart" >
              <div style={{display:"flex",marginLeft:"600px"}}>
              <ShoppingCartIcon style={{fill:"white"}}/>
              </div>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/ProductsView/:id" element={<ProductsView />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
