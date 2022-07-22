import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";
import StepAvatar from "./Steps/StepAvatar/StepAvatar";
import StepName from "./Steps/StepName/StepName";
import StepOTP from "./Steps/StepOTP/StepOTP";
import StepPhoneEmail from "./Steps/StepPhoneEmail/StepPhoneEmail";
import StepUsername from "./Steps/StepUsername/StepUsername";

const steps = {
  1: StepPhoneEmail,
  2: StepOTP,
  3: StepName,
  4: StepAvatar,
  5: StepUsername,
};

const Register = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const Step = steps[step];

  const onNext = () => {
    if (step < 5) {
      setStep((prev) => prev + 1);
    } else {
      navigate("/home");
    }
  };

  return (
    <div>
      <Step onNext={onNext} />
    </div>
  );
};

export default Register;
