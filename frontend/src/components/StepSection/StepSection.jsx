import { AnimatePresence } from "framer-motion";
import React, { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import Button2 from "@/uikit/Button2/Button2";
import TrashBtn from "@/uikit/TrashBtn/TrashBtn";
import DeliveryStep from "./components/DeliveryStep/DeliveryStep";
import InfoBlock from "./components/InfoBlock/InfoBlock";
import StepComponent from "./components/StepComponent/StepComponent";
import StepsBlock from "./components/StepsBlock/StepsBlock";
import StepWithoutFile from "./components/StepWithoutFile/StepWithoutFile";
import TotalPriceBlock from "./components/TotalPriceBlock/TotalPriceBlock";
import TwoStepComponent from "./components/TwoStepComponent/TwoStepComponent";
import cs from "classnames";
import s from "./StepSection.module.scss";
import { scroller } from "react-scroll";
import dynamic from "next/dynamic";
const FeedbackModal = dynamic(() => import("../FeedbackModal/FeedbackModal"), {
  ssr: false,
});

const AddFiles = dynamic(() => import("./components/AddFiles/AddFiles"), {
  ssr: false,
});

export default function StepSection({ data, officesData }) {
  const [firstStep, setFirstStep] = useState(null);
  const [secondStep, setSecondStep] = useState(null);
  const [devliveryAddress, setDeliveryAddres] = useState(null);
  const [isOpened, setIsOpened] = useState(false);
  const [fileDataStep, setFileDataStep] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [nextBtn, setNextBtn] = useState(true);
  const [orderBtn, setOrderBtn] = useState(false);
  const { register, reset, getValues, watch } = useForm();
  const { defaultPrice, deliveryAmount } = data;
  const inputs = watch();
  const checkValue = useCallback(() => {
    let error;
    for (const key in getValues()) {
      error = Boolean(getValues()[key]);
    }
    return error;
  }, [getValues]);

  useEffect(() => {
    setNextBtn(
      Boolean(!firstStep || !secondStep || !devliveryAddress || !checkValue())
    );
    setOrderBtn(
      Boolean(firstStep && secondStep && devliveryAddress && checkValue())
    );
  }, [firstStep, secondStep, devliveryAddress, checkValue, inputs]);

  const handleClear = () => {
    setFirstStep(null);
    setSecondStep(null);
    setDeliveryAddres(null);
    setTotalPrice(data.defaultPrice);
    if (getValues("file")) {
      reset({ file: "" });
    } else {
      reset({ ogrn: "", corp_name: "" });
    }
  };

  const handleOpen = () => {
    setIsOpened((prev) => !prev);
  };

  const scrollFunction = (id) => {
    scroller.scrollTo(id, {
      duration: 700,
      delay: 0,
      smooth: "easeInOutQuint",
    });
  };

  const handleNextStep = () => {
    if (!firstStep) {
      scrollFunction("1");
    } else if (!secondStep) {
      scrollFunction("2");
    } else if (
      !getValues("file")?.length &&
      (!getValues("ogrn") || !getValues("corp_name"))
    ) {
      scrollFunction("3");
    } else if (!devliveryAddress) {
      scrollFunction("4");
    }
  };

  useEffect(() => {
    let total = 0;
    if (firstStep) {
      total += firstStep.price;
    }
    if (secondStep) {
      total += secondStep.price;
    }
    if (devliveryAddress === "delivery") {
      total += data.deliveryAmount;
    }
    setTotalPrice(total + data.defaultPrice);
  }, [firstStep, secondStep, devliveryAddress, data]);

  return (
    <section className={s.section}>
      <div className={s.container}>
        <h2 className={s.header}>{data.header}</h2>
        {data.defaultText && <InfoBlock defaultText={data.defaultText} />}
        <StepsBlock count={1} className={s.step} id="1" />
        <h3 className={s.header_step}>
          {data.steps[0].header ? data.steps[0].header : ""}
        </h3>
        {data ? (
          <StepComponent
            products={data.steps[0].products}
            select={firstStep}
            setSelect={setFirstStep}
          />
        ) : (
          ""
        )}

        {data.steps[1] && <StepsBlock count={2} className={s.step} id="2" />}
        {data.steps[1] && (
          <h3 className={s.header_step}>
            {data.steps[1].header ? data.steps[1].header : ""}
          </h3>
        )}
        {data.steps[1] ? (
          <TwoStepComponent
            products={data.steps[1].products}
            select={secondStep}
            setSelect={setSecondStep}
          />
        ) : (
          ""
        )}
        <StepsBlock count={3} className={s.step} id="3" />
        <h3 className={s.header_step}>
          {data.files
            ? "Прикрепите оттиск печати"
            : "Внесите ОГРН из свидетельства и название из устава"}
        </h3>
        {data.files ? (
          <AddFiles
            register={register}
            reset={reset}
            classFileName={s.file_name}
            setFileData={setFileDataStep}
          />
        ) : (
          <StepWithoutFile register={register} reset={reset} />
        )}
        <StepsBlock count={4} className={s.step} id="4" />
        <h3 className={s.header_step}>Выберете способ получения печати</h3>
        <DeliveryStep
          select={devliveryAddress}
          setSelect={setDeliveryAddres}
          officesData={officesData}
          deliveryAmount={data.deliveryAmount}
        />
      </div>
      <TotalPriceBlock
        onClick={handleOpen}
        totalPrice={totalPrice}
        handleClear={handleClear}
        text={`
        Изготовление печати ${data.defaultPrice} ₽
        ${firstStep ? "+ оснастка" : ""} ${secondStep ? "+ дизайн" : ""}
        ${devliveryAddress === "delivery" ? "+ доставка" : ""}
      `}
      />
      <AnimatePresence>
        {isOpened && (
          <FeedbackModal
            theme={data.pageData.title}
            header={"Оформление заказа"}
            isOpened={isOpened}
            onClose={handleOpen}
            file={fileDataStep ? !fileDataStep : data.file}
            delivery={devliveryAddress === "delivery" ? true : false}
            addData={{
              ...inputs,
              file: fileDataStep ? fileDataStep : null,
              firstStep,
              secondStep,
              totalPrice,
              defaultPrice,
              theme: data.pageData.title,
              deliveryAmount:
                devliveryAddress === "delivery" ? deliveryAmount : "",
            }}
          />
        )}
      </AnimatePresence>
      {(firstStep ||
        secondStep ||
        devliveryAddress ||
        getValues("file")?.length ||
        getValues("ogrn") ||
        getValues("corp_name")) && (
        <div className={cs(s.total_line)}>
          <div className={s.line_container}>
            <div className={s.content}>
              <p className={s.title}>Ваш заказ</p>
              <p className={s.line_text}>
                Изготовление печати {data.defaultPrice} ₽{" "}
                {firstStep && "+ оснастка"} {secondStep && "+ дизайн"}{" "}
                {devliveryAddress === "delivery" && "+ доставка"}
              </p>
            </div>
            <div className={s.price}>
              <p className={s.cost}>Сумма</p>
              <div className={s.amount}>
                <p className={s.amount_text}>
                  {totalPrice} <span className={s.currency}>₽</span>
                </p>
                <TrashBtn className={s.clear_btn} onClick={handleClear} />
              </div>
            </div>
            {nextBtn && <Button2 onClick={handleNextStep}>Далее</Button2>}
            {!nextBtn && orderBtn ? (
              <Button2 onClick={handleOpen}>Оформить заказ</Button2>
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </section>
  );
}
