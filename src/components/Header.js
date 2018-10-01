import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Budgeting App</h1>
    <nav>
      <ul>
        <NavLink to="/" activeClassName="is-active" exact={true}>
          Dashboard
        </NavLink>
        <NavLink to="/create" activeClassName="is-active">
          Create Expense
        </NavLink>
        <NavLink to="/edit" activeClassName="is-active">
          Edit
        </NavLink>
        <NavLink to="/help" activeClassName="is-active">
          Help
        </NavLink>
      </ul>
    </nav>
  </header>
);

export default Header;
