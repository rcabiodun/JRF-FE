import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

function NotFoundPage() {
  return (
    <div>
      <NavBar />
      <main>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center py-5 my-5">
              <h1 className="display-1">404</h1>
              <h2 className="mb-4">Page Not Found</h2>
              <p className="lead mb-5">
                The page you are looking for might have been removed, had its name changed,
                or is temporarily unavailable.
              </p>
              <Link to="/" className="btn btn-primary">
                Return to Homepage
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default NotFoundPage;