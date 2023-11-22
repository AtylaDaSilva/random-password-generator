//React
import { React, useState } from 'react';

//CSS
import '../css/App.css';

export default function App() {
  /**
   * Generates a pseudo-random password by pulling characters from a characted pool
   * @returns The generated password string
   */
  function generatePassword() {
    const charPool = [
      //Numbers
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      //Symbols
      ["!", "?", "@", "#", "$", "%", "&", "*", "(", ")", "[", "]", "{", "}", "-", "_", "=", "+", "§", "'", '"', "`", "~", "^", ",", "<", ">", ".", ";", ":", "/", "\\", "|"],
      //Lower Case Letters
      ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
      //Upper Case Letters
      ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    ];

    //Password Form Data
    const startsWith = formData.startsWith;
    const endsWith = formData.endsWith;
    const passwordLength = formData.passwordLength;
    const options = Object.values(formData.options);
    let password = "";

    //Check if at least 1 option was selected
    const noOptionsSelected = options.every(opt => opt === false);

    if (noOptionsSelected) return password;

    //Generate password
    for (let i = 0; i < passwordLength; i++) { 
      password += getRandomChar(charPool, options);
    }

    //Return concatenated password
    return `${startsWith}${password}${endsWith}`;
  }

  /**
   * Returns a pseudo-random element from a charPool matrix. The second argument is an array of booleans that is equivalent to what options the user selected in the password form.
   * @param {*} charPool A bi-dimensional matrix
   * @param {*} options An array of booleans
   * @returns A pseudo-ranom element from the charPool matrix
   */
  function getRandomChar(charPool, options) { 
    //Generate the first index of the matrix
    let index1 = "";

    //Make sure the element in the options array at the position of index1 is true.
    do { 
      index1 = Math.floor(Math.random() * charPool.length);
    } while (options[index1] == false)

    //Generate the second index of the matrix
    const index2 = Math.floor(Math.random() * charPool[index1].length);

    //Return an element from charPool
    return charPool[index1][index2];
  }

  /**
   * Updates state with the generated password when the submit button is clicked
   * @param {*} event Event object passed by the onChange prop
   */
  function handleSubmit(event) { 
    event.preventDefault();
    
    setFormData(currentFormData => { 
      return {
        ...currentFormData,
        result: generatePassword()
      };
    });
  }

  /**
   * Updates state every time a change occurs in one of the form inputs
   * @param {*} event Event object passed by the onChange prop
   */
  function handleChange(event) { 
    const { name, value, type, checked } = event.target;

    setFormData(currentFormData => { 
      return (type.toLowerCase() === 'checkbox')
        ? { ...currentFormData, options: { ...currentFormData.options, [name]: checked } }
        : { ...currentFormData, [name]: value }
    })
  }

  const [formData, setFormData] = useState({
    passwordLength: 42,
    startsWith: "",
    endsWith: "",
    options: {
      hasNumbers: true,
      hasSymbols: true,
      hasLowerCase: true,
      hasUpperCase: true
    },
    result: ""
  });

  return (
    <div className="App d-flex justify-content-center align-items-center">
      <div
        id='main-container'
        className="container border border-primary d-flex flex-column justify-content-start"
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
                    <span className='badge bg-primary ms-1'>{ formData.passwordLength }</span>
                  </label>
                  <input
                    type="range"
                    name="passwordLength"
                    id="password-range-input"
                    value={formData.passwordLength}
                    onChange={handleChange}
                    min={6}
                    max={100}
                  />
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
                      name="startsWith"
                      id="starts-with-input"
                      className='form-control'
                      placeholder='Starts with'
                      value={formData.startsWith}
                      onChange={handleChange}
                    />
                    <label htmlFor="starts-with-input">Starts with</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="text"
                      name="endsWith"
                      id="ends-with-input"
                      className='form-control'
                      placeholder='Starts with'
                      value={formData.endsWith}
                      onChange={handleChange}
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
                      value={formData.result}
                      readOnly
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
                              name='hasNumbers'
                              checked={formData.options.hasNumbers}
                              onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="numbers-input">Numbers</label>
                          </div>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="symbols-input"
                              name='hasSymbols'
                              checked={formData.options.hasSymbols}
                              onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="symbols-input">Symbols</label>
                          </div>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="lower-case-letters-input"
                              name='hasLowerCase'
                              checked={formData.options.hasLowerCase}
                              onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="lower-case-letters-input">Lower Case Letters</label>
                          </div>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="upper-case-letters-input"
                              name='hasUpperCase'
                              checked={formData.options.hasUpperCase}
                              onChange={handleChange}
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
