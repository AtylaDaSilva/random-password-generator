//React
import { React, useState, useEffect } from 'react';

//CSS
import '../css/App.css';

//Components
import MainContent from './containers/MainContent';
import ThemeSwicther from './buttons/ThemeSwicther';
import ToastContainer from './toasts/ToastContainer';
import SubFooter from './containers/SubFooter';
import Footer from './containers/Footer';

export default function App(props) {
  const { bootstrap } = props.modules;
  /**
   * Generates a pseudo-random password by pulling characters from a character pool
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
    } while (options[index1] === false)

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

  //Toast function & state
  /**
   * Displays a string of text as a toast
   * @param {*} text The string of text to be displayed
   */
  function toast(text) {
    //Update toast state
    setToastText(text);

    //Show bootstrap toast
    const toastElement = document.querySelector("#toast");
    if (toastElement) { 
        const toast = bootstrap.Toast.getOrCreateInstance(toastElement);
        toast.show();
    }
  }

  const [toastText, setToastText] = useState(() => "");

  useEffect(() => {
    //Enable Bootstrap Tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
  }, [])

  //Object to pass callbacks around between components
  const callbacks = {
    toast,
    handleChange,
    handleSubmit
  }

  return (
    <div className="App d-flex flex-column justify-content-start align-items-center overflow-x-hidden">

      <div className="App-header d-flex justify-content-center align-items-start">
        <ThemeSwicther />
      </div>

      <MainContent modules={{ bootstrap }} formData={formData} callbacks={callbacks} />

      <SubFooter />

      <Footer />

      {/* Bootstrap Toast */}
      <ToastContainer toastText={ toastText } />
    </div>
  );
}
