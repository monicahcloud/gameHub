import { isRouteErrorResponse, useRouteError } from "react-router-dom"
import NavBar from "../components/NavBar"


const ErrorPage = () => {

    const error = useRouteError()

  return (
    <>
    <NavBar/>
      <div className="flex items-center justify-center h-screen bg-base-200">
        <div className="max-w-lg text-center p-6 bg-white shadow-xl rounded-lg">
          <h1 className="text-4xl font-semibold text-error mb-4">
            Oops! Something went wrong.
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            {isRouteErrorResponse(error) ? 'Sorry, the page you are looking for does not exist.' : 'An unexpected error has occured.'}
          </p>
          <a href="/" className="btn btn-primary">
            Go Back to Home
          </a>
        </div>
      </div>
    </>
  )
}

export default ErrorPage
