import Book from "src/pages/Book";
import Product from "src/pages/Product";
import New from "src/pages/New";
import Promotion from "src/pages/Promotion";
import Voucher from "src/pages/Voucher";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
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
import VoucherDetail from "src/components/Voucher/VoucherDetail";

const publicRoutes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/product", element: <Product /> },
  { path: '/product/:productId', element: <CardProduct />},
  { path: '/product/:productId/:productIdChild', element: <ProductDetail />},
  { path: "/promotion", element: <Promotion /> },
  { path: "/voucher", element: <Voucher /> },
  { path: "/voucher/:voucherId", element: <VoucherDetail /> },
  { path: "/book", element: <Book /> },
  { path: "/new", element: <New /> },
  { path: "/new/:newId", element: <NewDetail /> },
  { path: "/cart", element: <Cart />, layout: SecondLayout },
  { path: "/signup", element: <SignUp /> },
  { path: "/login", element: <Login /> },
  { path: "/bill", element: <Bill />, layout: SecondLayout },
  { path: "/paymentDetail", element: <PaymentDetail />, layout: SecondLayout },
  { path: "/about/:aboutId", element: <ChooseUs /> },
  { path: "/payment", element: <Payment />, layout: null },
];

export { publicRoutes };
