import React, { useState } from "react";
import Popup from "./Popup";
import Header from "./Header";
import Input from "./Input";
import Checkbox from "./Checkbox";
import Button from "./Button";

interface SignUpFormState {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  username: string;
  password: string;
  agreeToTerms: boolean;
}

type SignUpFormErrorState = Omit<SignUpFormState, "agreeToTerms"> & {
  agreeToTerms: string;
};

const SignUpForm = () => {
  const [formState, setFormState] = useState<SignUpFormState>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    username: "",
    password: "",
    agreeToTerms: false, // Add a new field for the checkbox
  });

  const [errors, setErrors] = useState<SignUpFormErrorState>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    username: "",
    password: "",
    agreeToTerms: "", // Add a new field for the checkbox
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    setFormState({
      ...formState,
      [name]: type === "checkbox" ? checked : value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newErrors: SignUpFormErrorState = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      username: "",
      password: "",
      agreeToTerms: "",
    };

    if (!formState.firstName) {
      newErrors.firstName = "Please enter your first name";
    }

    if (!formState.lastName) {
      newErrors.lastName = "Please enter your last name";
    }

    if (!formState.email) {
      newErrors.email = "Please enter your email";
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formState.phoneNumber) {
      newErrors.phoneNumber = "Please enter your phone number";
    } else if (!/^[0-9]{10}$/.test(formState.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid phone number";
    }

    if (!formState.username) {
      newErrors.username = "Please enter a username";
    }

    if (!formState.password) {
      newErrors.password = "Please enter a password";
    }

    if (!formState.agreeToTerms) {
      newErrors.agreeToTerms = "Please agree to the terms";
    }

    setErrors(newErrors);

    if (
      Object.values(newErrors).every((x) => x === "") &&
      Object.values(formState).every((x) => x !== "")
    ) {
      setShowPopup(true);
    }
  };

  return (
    <div
      className="flex flex-col  items-center px-2 py-6 justify-center min-h-screen"
      id="bg"
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-4 rounded-md bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-50 border-opacity-10"
      >
        <Header>Sign Up Form</Header>
        <Input
          label="First Name"
          name="firstName"
          value={formState.firstName}
          onChange={handleInputChange}
          error={errors.firstName}
        />
        <Input
          label="Last Name"
          name="lastName"
          value={formState.lastName}
          onChange={handleInputChange}
          error={errors.lastName}
        />
        <Input
          label="Email"
          name="email"
          value={formState.email}
          onChange={handleInputChange}
          error={errors.email}
        />
        <Input
          label="Phone Number"
          name="phoneNumber"
          type="tel"
          value={formState.phoneNumber}
          onChange={handleInputChange}
          error={errors.phoneNumber}
        />
        <Input
          label="Username"
          name="username"
          value={formState.username}
          onChange={handleInputChange}
          error={errors.username}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          value={formState.password}
          onChange={handleInputChange}
          error={errors.password}
        />
        <Checkbox
          label="I agree to the terms and conditions"
          name="agreeToTerms"
          checked={formState.agreeToTerms}
          onChange={handleInputChange}
          error={errors.agreeToTerms}
        />
        <Button>Sign Up</Button>
      </form>
      {showPopup && (
        <Popup
          message="Thank you for signing up!"
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
};

export { SignUpForm };
