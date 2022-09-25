import Book from "src/pages/Book";
import Product from "src/pages/Product";
import New from "src/pages/New";
import Promotion from "src/pages/Promotion";
import Voucher from "src/pages/Voucher";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Home  from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ChooseUs from "src/components/About/ChooseUs";
import CardProduct from "src/components/Product/CardProduct";
import ProductDetail from "src/components/Product/ProductDetail";
import NewDetail from "src/components/New/NewDetail";
import SecondLayout from "src/layout/SecondLayout";
import Bill from "src/pages/Bill";
import PaymentDetail from "src/pages/PaymentDetail";
import Payment from "src/pages/Payment";

const publicRoutes = [
    {path: '/', element: <Home/> },
    {path: '/about', element: <About/> },
    {path: '/product', element: <Product/> },
    {path: '/promotion', element: <Promotion/> },
    {path: '/voucher', element: <Voucher/> },
    {path: '/book', element: <Book/> },
    {path: '/new', element: <New/> },
    {path: '/cart', element: <Cart/>, layout: SecondLayout },
    {path: '/signup', element: <SignUp/> },
    {path: '/login', element: <Login/> },
    {path: '/bill', element: <Bill/>, layout: SecondLayout},
    {path: '/paymentDetail', element: <PaymentDetail/>, layout: SecondLayout },
    {path: '/why-choose-us--pde,1121', element: <ChooseUs/> },
    {path: '/khai-vi-pc,5699', element: <CardProduct/> },
    {path: '/food-name-pd,5556', element: <ProductDetail/> },
    {path: '/payment', element: <Payment/>, layout: null },
    {path: '/huong-vi-tinh-khiet-len-ngoi-nd-2038', element: <NewDetail/> },
];


export {publicRoutes};