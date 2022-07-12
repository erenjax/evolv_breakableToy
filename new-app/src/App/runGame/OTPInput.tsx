import React, {useState, useEffect} from "react";

let currentOTPIndex: number = 0;
const OtpInput = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [activeOTPIndex, setActiveOTPIndex] = useState(0);

  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleOnChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    const {value} = target;
    const newOTP: string[] = [...otp];
    newOTP[currentOTPIndex] = value.substring(value.length - 1);

    if (!value) setActiveOTPIndex(currentOTPIndex - 1);
    else setActiveOTPIndex(currentOTPIndex + 1);

    setOtp(newOTP);
  };

  const handleOnKeyDown = (
    {key}: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    currentOTPIndex = index;
    if (key === "Backspace") setActiveOTPIndex(currentOTPIndex - 1);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOTPIndex]);

  return (
    <div>
      {otp.map((_, index) => {
        return (
          <React.Fragment key={index}>
            <input
              ref={index === activeOTPIndex ? inputRef : null}
              type="number"
              className="w-12 h-12 border-2 rounded bg-transparent text-center font-semibold"
              onChange={handleOnChange}
              onKeyDown={(e) => handleOnKeyDown(e, index)}
              value={otp[index]}
            />
            {index === otp.length - 1 ? null : (
              <span className="w-2 py-0.5 bg-gray-400" />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default OtpInput;
