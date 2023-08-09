import logo from './logo.svg';
import './App.css';
import FunctionComponent from './DemoComponent/FunctionComponent';
import ClassComponent from './DemoComponent/ClassComponent';
import BTComponent from './BTcomponent/Btcomponent';
import BindingData from './BindingData/BindingData';
import RenderWithCondition from './RenderWithCondition/RenderWithCondition';
import HandleEvent from './HandleEvent/HandleEvent';
import StyleComponent from './StyleComponent/StyleComponent';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import DemoState from './State/DemoState';
import DemoDrops from './Props/DemoDrops';
import BTShoeShop from './BTShoeShop/BTShoeShop';
import DemoRedux from './DemoRedux/DemoRedux';
import BTPhoneRedux from './BTPhoneRedux/BTPhoneRedux';
import BTMovieBooking from './BTMovieBooking/BTMovieBooking';

import { Route, Routes } from 'react-router-dom'
import NotFound from './page/NotFound';


//component lớn nhất trong dự án

// 2 loại component
// + class component (stateful) <2019 (lifecyle)
// + function component (stateless) 100%

//JSX: Javascript XML => giúp các bạn viết html trong javascript




function App() {
  return (
    // <div></div>
    <div className="App">
      {/* <span className='title'>HELLO BC47</span>
          <p>nguyễn vieté hải</p>
          <h1></h1>

          <FunctionComponent></FunctionComponent>
          <ClassComponent></ClassComponent>

          <FunctionComponent /> */}


      <Routes>
        <Route path="/btcomponent" element={<BTComponent />} />
        <Route path="/bindingdata" element={<BindingData />} />
        <Route path="/rendercondition" element={<RenderWithCondition />} />
        <Route path="/handleevent" element={<HandleEvent />} />
        <Route path="/stylecomponent" element={<StyleComponent />} />
        <Route path="/rendermap" element={<RenderWithMap />} />
        <Route path="/demostate" element={<DemoState />} />
        <Route path="/demoprops" element={<DemoDrops />} />
        <Route path="/btshoeshop" element={<BTShoeShop />} />
        <Route path="/demoredux" element={<DemoRedux />} />
        <Route path="/btphone" element={<BTPhoneRedux />} />
        <Route index element={<BTMovieBooking />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* <BTComponent />

          <BindingData />

          <RenderWithCondition />

          <HandleEvent />

          <StyleComponent />

          <RenderWithMap />

          <DemoState />

          <DemoDrops />

          <BTShoeShop />

          <DemoRedux />

          <BTPhoneRedux />

          <BTMovieBooking />

          <NotFound /> */}

    </div>
  )
}


export default App;
