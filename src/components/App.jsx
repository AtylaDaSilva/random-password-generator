//React
import { React } from 'react';

//CSS
import '../css/App.css';

export default function App() {
  function handleSubmit(event) { 
    event.preventDefault();
    return;
  }

  return (
    <div className="App d-flex justify-content-center align-items-center">
      <div
        id='main-container'
        className="container border border-primary h-50 d-flex flex-column justify-content-start"
      >
        <header id='main-container-header'>
          <h1 className='text-center'>Random Password Generator</h1>
        </header>
        <main id='main-container-body' className='d-flex align-items-center justify-content-center flex-grow-1'>

          { /*Bootstrap Grid */ }
          <form
            onSubmit={handleSubmit}
            className='container h-100 w-100'
          >
            { /*Row 01 */ }
            <div className="row mb-3">
              <div className="col">
                <div
                  id="password-length-container"
                  className='d-flex flex-column'
                >
                  <label htmlFor="password-range-input">
                    Password Length
                    <span className='badge bg-primary'>42</span>
                  </label>
                  <input type="range" name="password-length" id="password-range-input" />
                </div>
              </div>
            </div>

            { /*Row 02 */ }
            <div className="row mb-3">
              <div className="col">
                <div
                  id="starts-ends-container"
                  className='d-flex flex-column'
                >
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      name="starts-with"
                      id="starts-with-input"
                      className='form-control'
                      placeholder='Starts with'
                    />
                    <label htmlFor="starts-with-input">Starts with</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="text"
                      name="ends-with"
                      id="ends-with-input"
                      className='form-control'
                      placeholder='Starts with'
                    />
                    <label htmlFor="starts-with-input">Ends with</label>
                  </div>
                </div>
              </div>
            </div>

            { /*Row 03 */ }
            <div className="row">
              <div className="col-8">
                <div
                  id="result-container"
                  className='d-flex flex-column justify-content-center align-self-start'
                >
                  <div className="form-floating flex-grow-1 mb-2">
                    <input
                      type="text"
                      name="result"
                      id="result-input"
                      className='form-control'
                      placeholder='Result'
                    />
                    <label htmlFor="result-input">Result</label>
                  </div>

                  <div id="submit-container" className='d-flex flex-row align-items-center'>
                    <button className='btn btn-primary me-1' type="submit">
                      Generate Password
                    </button>
                    
                    <button id='copy-to-clipboard-btn' className='btn btn-outline-primary' type='button'>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="bi bi-clipboard"
                        width="24"
                        height="24"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div id="options-container">
                  <div className="accordion" id="options-accordion">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseContainer"
                          aria-expanded="true"
                          aria-controls="collapseContainer"
                        >
                          Options
                        </button>
                      </h2>
                      <div
                        id="collapseContainer"
                        className="accordion-collapse collapse"
                        data-bs-parent="#options-accordion"
                      >
                        <div className="accordion-body">
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="numbers-input"
                              checked
                            />
                            <label className="form-check-label" htmlFor="numbers-input">Numbers</label>
                          </div>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="symbols-input"
                              checked
                            />
                            <label className="form-check-label" htmlFor="symbols-input">Symbols</label>
                          </div>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="lower-case-letters-input"
                              checked
                            />
                            <label className="form-check-label" htmlFor="lower-case-letters-input">Lower Case Letters</label>
                          </div>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="upper-case-letters-input"
                              checked
                            />
                            <label className="form-check-label" htmlFor="upper-case-letters-input">Upper Case Letters</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
