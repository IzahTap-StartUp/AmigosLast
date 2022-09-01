import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/FeatureComponents/Footer";
import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/AuthScreens/RegisterScreen";
import SigninScreen from "./screens/AuthScreens/SigninScreen";
import BlogsPage from "./screens/BlogScreens/BlogsPage";
import BlogDetailPage from "./screens/BlogScreens/BlogDetailPage";
import BooksPage from "./screens/BookScreens/BooksPage";
import BookDetailPage from "./screens/BookScreens/BookDetailPage";
import JobsPage from "./screens/JobScreens/JobsPage";
import JobDetailPage from "./screens/JobScreens/JobDetailPage";
import About from "./screens/About";
import Error from "./components/HelperComponents/Error";
import Team from "./components/FeatureComponents/Team";
import Navbar from "./components/FeatureComponents/Navbar";
import ProfileSection from "./screens/DashboardScreens/ProfileSection";
import FavouriteSection from "./screens/DashboardScreens/FavouriteSection";
import PrivateRoute from "./common/routes/PrivateRoute";
import Dashboard from "./screens/DashboardScreens/Dashboard";
import UserBookList from "./screens/DashboardScreens/UserBookList";
import Contact from "./components/FeatureComponents/Contact";
import ExplanationPage from "./screens/ExplanationScreens/ExplanationPage";
import ExplanationDetailPage from "./screens/ExplanationScreens/ExplanationDetailPage";
import QuestionSection from "./components/ExplanationComponents/ExplanationDetailComponents/QuestionSection/QuestionSection";
import QuestionDetail from "./components/ExplanationComponents/ExplanationDetailComponents/QuestionSection/QuestionDetail/QuestionDetail";
import BookEditScreen from "./components/UserDashboard/BookEditScreen";
import StudyToolSection from "./screens/DashboardScreens/StudyToolSection";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <main>
          {/* Blog */}

          <Route path="/blogs" component={BlogsPage} exact></Route>
          <Route path="/blog/:id" component={BlogDetailPage} exact></Route>

          <Route path="/jobs" component={JobsPage} exact></Route>
          <Route path="/job/:id" component={JobDetailPage} exact></Route>

          <Route path="/books" component={BooksPage} exact></Route>
          <Route
            path="/search/title/:title?"
            component={BooksPage}
            exact
          ></Route>

          <Route
            path="/search/category/:category?"
            component={BooksPage}
            exact
          ></Route>

          <Route
            path="/search/category/:category/name/:name?"
            component={BooksPage}
            exact
          ></Route>

          <Route path="/book/:id" component={BookDetailPage} exact></Route>

          <Route path="/book/:id/edit" component={BookEditScreen} exact></Route>
          {/* Books */}
          <Route path="/explanations" component={ExplanationPage} exact></Route>
          <Route
            path="/explanation/:id"
            component={ExplanationDetailPage}
            exact
          ></Route>
          <Route
            path="/explanation/:id/topic/:topicId/sections/:sectionId"
            component={QuestionSection}
            exact
          ></Route>
          <Route
            path="/explanation/:id/topic/:topicId/sections/:sectionId/questions/:questionId"
            component={QuestionDetail}
            exact
          ></Route>

          {/* Explanations */}

          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>

          <Route path="/about" component={About} exact></Route>
          <Route path="/team" component={Team} exact></Route>

          <Route path="/contact" component={Contact} exact></Route>

          <Route path="/" component={HomeScreen} exact></Route>
          <Route path="*" element={<Error />} />

          <PrivateRoute path="/dashboard" component={Dashboard}></PrivateRoute>
          <PrivateRoute
            path="/profile"
            component={ProfileSection}
          ></PrivateRoute>

          <PrivateRoute
            path="/mybooklist"
            component={UserBookList}
          ></PrivateRoute>

          <PrivateRoute
            path="/favourites"
            component={FavouriteSection}
          ></PrivateRoute>

          <PrivateRoute
            path="/studytools"
            component={StudyToolSection}
          ></PrivateRoute>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
