import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import { UserAuth } from "../hooks/useAuth";

export function SignUp() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { createUser } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(registerEmail, registerPassword);
      navigate("/");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className="max-w-[1280px] flex items-center justify-center mx-auto mt-12">
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Seu e-mail
          </label>
          <input
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Sua senha
          </label>
          <input
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
            type="password"
            id="password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="repeat-password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Repita a senha
          </label>
          <input
            type="password"
            id="repeat-password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              value=""
              className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required
            />
          </div>
          <label
            for="terms"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Eu concordo com os{" "}
            <a
              href="#"
              class="text-blue-600 hover:underline dark:text-blue-500"
            >
              Termos e condições
            </a>
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-[#001227f1] hover:[#001227f1] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:[#002550f0] dark:focus:ring-blue-800"
        >
          Registrar nova conta
        </button>
      </form>
    </div>
  );
}
