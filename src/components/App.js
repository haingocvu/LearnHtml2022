import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import Test1 from 'src/pages/test1/Test1';
import Test2 from 'src/pages/test2/Test2';
import List from 'src/pages/list/List';
import Class from 'src/pages/class/Class';
import Id from 'src/pages/id/Id';
import IFrame from 'src/pages/iframe/IFrame';
import ComputerCode from 'src/pages/computerCode/ComputerCode';
import Semantics from 'src/pages/semantics/Semantics';
import Emoji from 'src/pages/emoji/Emoji';
import Radio from 'src/pages/radio/Radio';
import Checkbox from 'src/pages/checkbox/Checkbox';
import Select from 'src/pages/select/Select';
import Colors from 'src/pages/colors/Colors';
import File from 'src/pages/file/File';
import Range from 'src/pages/range/Range';
import DisableInput from 'src/pages/disableinput/DisableInput';
import FormValidation from 'src/pages/formValidation/FormValidation';
import Canvas from 'src/pages/canvas/Canvas';
import Svg from 'src/pages/svg/Svg';
import Video from 'src/pages/video/Video';
import Location from 'src/pages/location/Location';
import DragDrop from 'src/pages/dragdrop/DragDrop';
import WebStorage from 'src/pages/webStorage/WebStorage';
import WebWorker from 'src/pages/webWorker/WebWorker';
import Fibonacci from 'src/pages/Fibonacci/Fibonacci';
import FibonacciWorker from 'src/pages/FibonacciWorker/FibonacciWorker';
import Selector from 'src/pages/selector/Selector';
import Border from 'src/pages/border/Border';
import Margin from 'src/pages/margin/Margin';
import WidthHeight from 'src/pages/widthHeight/WidthHeight';
import Outline from 'src/pages/outline/Outline';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Test1 />} />
        <Route path="/test2" element={<Test2 />} />
        <Route path="/list" element={<List />} />
        <Route path="/class" element={<Class />} />
        <Route path="/id" element={<Id />} />
        <Route path="/iframe" element={<IFrame />} />
        <Route path="/computercode" element={<ComputerCode />} />
        <Route path="/semantics" element={<Semantics />} />
        <Route path="/emoji" element={<Emoji />} />
        <Route path="/radio" element={<Radio />} />
        <Route path="/checkbox" element={<Checkbox />} />
        <Route path="/select" element={<Select />} />
        <Route path="colors" element={<Colors />} />
        <Route path="/file" element={<File />} />
        <Route path="/range" element={<Range />} />
        <Route path="/disable-input" element={<DisableInput />} />
        <Route path="/form-validation" element={<FormValidation />} />
        <Route path="/canvas" element={<Canvas />} />
        <Route path="/svg" element={<Svg />} />
        <Route path="/video" element={<Video />} />
        <Route path="/location" element={<Location />} />
        <Route path="/dragdrop" element={<DragDrop />} />
        <Route path="/web-storage" element={<WebStorage />} />
        <Route path="/web-worker" element={<WebWorker />} />
        <Route path="/fibonacci" element={<Fibonacci />} />
        <Route path="/fibonacci-worker" element={<FibonacciWorker />} />
        <Route path="/selector" element={<Selector />} />
        <Route path="/border" element={<Border />} />
        <Route path="/margin" element={<Margin />} />
        <Route path="/width-height" element={<WidthHeight />} />
        <Route path="/outline" element={<Outline />} />
      </Routes>
    </Router>
  );
}

export default App;
