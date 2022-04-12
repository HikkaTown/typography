import ArrowBtn from "../components/uikit/ArrowBtn/ArrowBtn";
import BtnNext from "../components/uikit/BtnNext/BtnNext";
import CloseBtn from "../components/uikit/CloseBtn/CloseBtn";
import Tab from "../components/uikit/Tab/Tab";
import YellowBtn from "../components/uikit/YellowBtn/YellowBtn";

export default function Index() {
  return (
    <>
      <BtnNext />
      <ArrowBtn />
      <CloseBtn />
      <Tab isActive={true}>Широкоформатная печать</Tab>
      <Tab>Широкоформатная печать</Tab>
      <YellowBtn>В каталог услуг</YellowBtn>
    </>
  );
}
