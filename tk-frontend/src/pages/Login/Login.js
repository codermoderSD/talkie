import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StepOTP from "../Register/Steps/StepOTP/StepOTP";
import StepPhoneEmail from "../Register/Steps/StepPhoneEmail/StepPhoneEmail";

const steps = {
  1: StepPhoneEmail,
  2: StepOTP,
};

const Login = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const Step = steps[step];

  const onNext = () => {
    if (step < 3) {
      setStep((prev) => prev + 1);
    } else {
      navigate("/home");
    }
  };

  return <Step onNext={onNext} />;
};

export default Login;
