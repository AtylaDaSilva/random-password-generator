//React
import { React, useState, useEffect } from 'react';

//CSS
import '../css/App.css';

//Components
import PasswordForm from './forms/PasswordForm';
import ThemeSwicther from './buttons/ThemeSwicther';

export default function App(props) {
  const { bootstrap } = props.modules;
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

  /*Form Data State */
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

  useEffect(() => {
    //Enable Bootstrap Tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
  }, [])

  return (
    <div className="App d-flex flex-column justify-content-start align-items-center">

      <div className="App-header d-flex justify-content-center align-items-start">
        <ThemeSwicther />
      </div>

      <div
        id='main-container'
        className="container border border-primary rounded-3 d-flex flex-column justify-content-start mt-5"
      >

        <header id='main-container-header'>
          <h1 className='text-center fs-2'>Random Password Generator</h1>
        </header>

        <main id='main-container-body' className='d-flex align-items-center justify-content-center flex-grow-1'>
          <PasswordForm modules={{ bootstrap }} formData={formData} callbacks={{ handleChange, handleSubmit }} />
        </main>

      </div>

      {/* Bootstrap Toast */}
      <div className="toastContainer mt-3 me-3 position-fixed top-0 end-0">
        <div
          id='copyToClipboardToast'
          className="toast align-self-end align-items-center"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="d-flex">
            <div className="toast-body">
              Copied!
            </div>
            <button type="button" className="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
        </div>
      </div>
    </div>
  );
}
