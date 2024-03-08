//React
import { React, useState } from 'react';

//React Bootstrap
import { ToastContainer } from 'react-bootstrap';

//CSS
import '../css/App.css';

//Components
import MainContent from './containers/MainContent';
import ThemeSwicther from './buttons/ThemeSwicther';
import BasicToast from './toasts/BasicToast';
import SubFooter from './containers/SubFooter';
import Footer from './containers/Footer';

//Changelog
try {
  var changesData = require("../changes.json");
} catch (error) {
  console.error(error);
}

export default function App() {

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

    if (noOptionsSelected) return startsWith + endsWith;

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

    //Generate password
    const password = generatePassword();

    if (password) {
      //Update state and validate password
      updatePassword(password);

      updateHistory(password);

      const validation = validatePassword(password);

      updatePasswordStrength(validation);

      toast("Password generated successfully!");
    }
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

  /**
   * Updates the password field in formData state
   * @param {string} password 
   */
  function updatePassword(password) {
    setFormData(currentFormData => {
      return {
        ...currentFormData,
        result: password
      };
    });
  }

  //Password strenght state and validation
  const [passwordStrength, setPasswordStrength] = useState(() => {
    return { value: 0, text: "", colorVariant: "primary", feedback: [] };
  });

  /**
   * Updates the password strength state
   * @param {object} validation A validation object returned by invoking zxcvbn()
   */
  function updatePasswordStrength(validation = {}) {
    setPasswordStrength(() => {
      let newState = {
        value: (validation?.score !== undefined) ? validation.score * 25 : 0,
        text: "",
        colorVariant: "primary",
        feedback: (validation?.feedback)
          ? (validation.feedback.warning)
            ? [validation.feedback.warning, ...validation?.feedback?.suggestions]
            : [...validation?.feedback?.suggestions]
          : []
      };

      /**
       * validation.score ranges from 0 to 4, where 0 is the lowest score and 4 the highest.
       * @see https://github.com/dropbox/zxcvbn?tab=readme-ov-file#usage for details.
       */
      switch (validation.score) {
        case 0:
          newState.text = "terrible";
          newState.colorVariant = "danger";
          break;

        case 1:
        case 2:
          newState.text = "weak";
          newState.colorVariant = "warning";
          break;

        case 3:
          newState.text = "moderate";
          newState.colorVariant = "info";
          break;

        case 4:
          newState.text = "excelent";
          newState.colorVariant = "success";
          break;
      }

      return newState;
    })
  }

  /**
   * Validates a password by using zxcvbn. Returns an object with several properties. @see https://github.com/dropbox/zxcvbn?tab=readme-ov-file#usage for the full list of properties.
   * @param {string} password A password string.
   * @returns {object}
   */
  function validatePassword(password) {
    if (!password || typeof password !== "string") return null;

    const zxcvbn = require("zxcvbn");
    return zxcvbn(password);
  }

  //Toast state and functions
  const [toastState, setToastState] = useState(() => {
    return { body: "", show: false }
  });

  /**
   * Updates toast state to display a string of text
   * @param {string} text The string of text to be toasted
   */
  function toast(text) {
    setToastState({ body: text, show: true });
  }

  //History state and functions
  const [history, setHistory] = useState(() => []);

  /**
   * Updates the password history
   * @param {string} password 
   */
  function updateHistory(password = "") {
    setHistory(currentHistory => {
      const now = new Date();
      const h = now.getHours().toString().padStart(2, "0");
      const m = now.getMinutes().toString().padStart(2, "0");
      const s = now.getSeconds().toString().padStart(2, "0");
      return [
        ...currentHistory,
        [password, `${h}:${m}:${s}`]
      ];
    });
  }

  //Changelog state
  const [changes, setChanges] = useState(() => changesData || {});

  //Object to pass callbacks around between components
  const callbacks = {
    toast,
    setToastState,
    handleChange,
    handleSubmit,
    setHistory
  }

  const state = {
    formData,
    history,
    changes,
    passwordStrength,
    toastState
  }

  return (
    <div className="App d-flex flex-column justify-content-between align-items-center">

      <header className="App-header d-flex justify-content-center my-2">
        <ToastContainer position='top-end' className='p-3'>
          <BasicToast toast={toastState} setToastState={setToastState} />
        </ToastContainer>

        <ThemeSwicther />
      </header>

      <MainContent state={state} callbacks={callbacks} />

      <SubFooter state={state} callbacks={callbacks} />

      <Footer />
    </div>
  );
}
