import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import ArrayCreation from "./pages/ArrayCreation";
import AddRemoveMethods from "./pages/AddRemoveMethods";
import AccessMethods from "./pages/AccessMethods";
import ConversionMethods from "./pages/ConversionMethods";
import ValidationMethods from "./pages/ValidationMethods";
import IterationMethods from "./pages/IterationMethods";
import HigherOrderMethods from "./pages/HigherOrderMethods";
import AdvancedArrayMethods from "./pages/AdvancedArrayMethods";
import ComparisonTables from "./pages/ComparisonTables";
import InterviewQuestions from "./pages/InterviewQuestions";
import CheatSheet from "./pages/CheatSheet";

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/array-creation" element={<ArrayCreation />} />
          <Route path="/add-remove" element={<AddRemoveMethods />} />
          <Route path="/access-methods" element={<AccessMethods />} />
          <Route path="/conversion-methods" element={<ConversionMethods />} />
          <Route path="/validation-methods" element={<ValidationMethods />} />
          <Route path="/iteration-methods" element={<IterationMethods />} />
          <Route path="/higher-order" element={<HigherOrderMethods />} />
          <Route path="/advanced-methods" element={<AdvancedArrayMethods />} />
          <Route path="/comparisons" element={<ComparisonTables />} />
          <Route path="/interview-questions" element={<InterviewQuestions />} />
          <Route path="/cheat-sheet" element={<CheatSheet />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
