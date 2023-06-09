import * as React from 'react'
import { Routes, Route, Outlet, Link } from 'react-router-dom'
import Multiplier from './components/Multiplier'
import Divider from './components/Divider'
import './App.css'
import Subtract from './components/Subtract'
import IntrinsicCalculator from './components/IntrinsicCalculator'

export default function App() {
  return (
    <div id="background">
      <h1>Math Page</h1>

      <p>
        This example demonstrates some of the core features of React Router including nested{' '}
        <code>&lt;Route&gt;</code>s, <code>&lt;Outlet&gt;</code>s, <code>&lt;Link&gt;</code>s, and
        using a "*" route (aka "splat route") to render a "not found" page when someone visits an
        unrecognized URL.
      </p>

      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Add more routes here */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="subtract" element={<Subtract />} />
          <Route path="multiply" element={<Multiplier />} />
          <Route path="divide" element={<Divider />} />
          <Route path="intrinsicCalculator" element={<IntrinsicCalculator />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  )
}

// TODO: The components below should be in separate files
// DO NOT ADD MORE COMPONENTS BELOW

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}

      {/* Add more links to the menu here */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/subtract">Subtract</Link>
          </li>
          <li>
            <Link to="/multiply">Multiply</Link>
          </li>
          <li>
            <Link to="/divide">Divide</Link>
          </li>
          <li>
            <Link to="/intrinsicCalculator">Intrinsic Calculator</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  )
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  )
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  )
}
