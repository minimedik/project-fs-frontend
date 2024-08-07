import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CreateAuction from './components/create_auction';
import AuctionList from './components/auction_list';



export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<AuctionList/>}></Route>
    <Route path='/create' element={<CreateAuction/>}></Route>
    </Routes>
    </BrowserRouter>    
    </>
  );
}
