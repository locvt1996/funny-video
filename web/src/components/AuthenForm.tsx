import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

// services
import { authenApi } from "../store/authen/service";

// selectors
import { useAppSelector } from "../hooks/useAppSelector";
import { getLoadingAuthen } from "../store/authen/selector";

interface AuthenFormProps {}

interface IValueForm {
  email: string;
  password: string;
}

const AuthenForm: React.FC<AuthenFormProps> = ({}) => {
  const dispatch = useDispatch();
  const [valueForm, setValueForm] = useState<IValueForm>({
    email: "",
    password: "",
  });

  const loading = useAppSelector(getLoadingAuthen);

  const handleOnChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValueForm((preValue) => ({
        ...preValue,
        [event.target.id]: event.target.value,
      }));
    },
    []
  );

  const handleSubmit = useCallback(() => {
    dispatch(authenApi(valueForm));
  }, [valueForm, dispatch]);

  return (
    <div className={`flex justify-end ${loading && "loading"}`}>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-1/4 mr-4"
        id="email"
        type="email"
        placeholder="Email"
        value={valueForm.email}
        onChange={handleOnChange}
      />

      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-1/4 mr-4"
        id="password"
        type="password"
        placeholder="Password"
        value={valueForm.password}
        onChange={handleOnChange}
      />

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleSubmit}
      >
        Login/Register
      </button>
    </div>
  );
};

export default AuthenForm;
