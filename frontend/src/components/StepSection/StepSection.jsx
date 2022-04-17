import React, { useState } from "react";
import InfoBlock from "./components/InfoBlock/InfoBlock";
import StepComponent from "./components/StepComponent/StepComponent";
import StepsBlock from "./components/StepsBlock/StepsBlock";
import TwoStepComponent from "./components/TwoStepComponent/TwoStepComponent";
import s from "./StepSection.module.scss";
export default function StepSection({ data }) {
  const [firstStep, setFirstStep] = useState(null);
  const [secondStep, setSecondStep] = useState(null);
  return (
    <div className={s.section}>
      <div className={s.container}>
        <h2 className={s.header}>{data.header}</h2>
        {data.defaultText && <InfoBlock defaultText={data.defaultText} />}
        <StepsBlock count={1} className={s.step} />
        <h3 className={s.header_step}>{data.steps[0].header}</h3>
        <StepComponent
          products={data.steps[0].proudcts}
          select={firstStep}
          setSelect={setFirstStep}
        />

        <StepsBlock count={2} className={s.step} />
        <h3 className={s.header_step}>{data.steps[1].header}</h3>
        <TwoStepComponent
          products={data.steps[1].products}
          select={secondStep}
          setSelect={setSecondStep}
        />
        <StepsBlock count={3} className={s.step} />
        {data.files ? <>Файлы да </> : <>Файлов нет</>}
        <StepsBlock count={4} className={s.step} />
      </div>
    </div>
  );
}
