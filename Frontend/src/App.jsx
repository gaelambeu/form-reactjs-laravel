

function App() {

  return (
    <div className="max-w-6xl mx-auto">
      <nav className="rounded bg-indigo-900 text-white px-2 py-2.5 sm:px-4">
        <div 
          className="container mx-auto flex flex-wrap items-center justify-between"
          bis_skin_checked="1"
        >
          <a href="https://laraveller.com/" className="flex items-center">
            laraveller
          </a>
          <button
          dta-collapse-toggle="navbar-default" 
          type="button"
          className="
          ml-3 
          inline-flex 
          items-center
          rounded-lg
          p-2
          text-sm text-gray-500
          hover:bg-gray-100
          focus:outline-none focus-ring-2 focus:ring-gray-200
          dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600
          md:hidden
          "
          aria-controls="navbar-default"
          aria-expanded="false"
          >
          
            <span className="sr-only">Open main menu</span>
            <svg 
              className="h-6 w-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                fill-rule="evenodd"
                d="M3 Sa1 1 a 011-1h12a1 1 0 110 2 "
                >

              </path>

            </svg>

          </button>
        </div>
      </nav>
    </div>
  )
}

export default App
