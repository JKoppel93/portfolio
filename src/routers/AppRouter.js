import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../components/HomePage";
import PortfolioPage from "../components/PortfolioPage";
import PortfolioItemPage from "../components/PortfolioItemPage";
import ContactPage from "../components/ContactPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header></Header>
      <Switch>
        <Route path="/" component={HomePage} exact={true}></Route>
        <Route path="/portfolio" component={PortfolioPage} exact={true}></Route>
        <Route path="/portfolio/:id" component={PortfolioItemPage}></Route>
        <Route path="/contact" component={ContactPage}></Route>
        <Route component={NotFoundPage}></Route>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
