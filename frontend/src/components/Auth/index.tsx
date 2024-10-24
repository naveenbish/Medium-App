import { useState } from "react";
import { SignupInput } from "@naveenbisht/medium-common";
import { Link } from "react-router-dom";
import { ChangeEvent } from "react";

export default function Auth({ type }: { type: "signup" | "signin" }) {
  const [postInputs, setPostInputs] = useState<SignupInput>({
    email: '',
    name: '',
    password: ''
  });
  return (
    <div className="w-full px-10">
      <div className="flex flex-col">
        <div className="flex flex-col justify-center items-center">
          <div className="text-3xl font-bold">Create an account</div>
          <div className="text-base text-gray-500">{type === "signin" ? "Don't have an Account? " : "Already have an account?"}
            <Link to={type === "signin" ? "/signup" : "/signin"} className="underline">{type === "signin" ? "Sign up" : "Sign in"}</Link>
          </div>
        </div>
        <div className="flex flex-col gap-6 text-lg w-full py-4">
          <div >
            <LabelledInput label={'Username'} placeholder={'Enter your username'} type={'text'} onChange={(e) => {
              setPostInputs(c => ({
                ...c,
                name: e.target.value
              }))
            }} />
          </div>
          <div>
            <LabelledInput label={'Email'} placeholder={'Hello@gmail.com'} type={'email'} onChange={(e) => {
              setPostInputs(c => ({
                ...c,
                email: e.target.value
              }))
            }} />
          </div>
          <div >
            <LabelledInput label={'Password'} placeholder={'pass@123'} type={'password'} onChange={(e) => {
              setPostInputs(c => ({
                ...c,
                password: e.target.value
              }))
            }} />
          </div>
          <div>
            <button className="bg-black text-white w-full rounded">{type === "signin" ? "Sign in" : "Sign up"}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
  return <div>
    <label>{label}</label>
    <input className="border py-1 px-1 rounded w-full placeholder:text-sm placeholder:text-gray-700" type={type} placeholder={placeholder} onChange={onChange} />
  </div>
}
