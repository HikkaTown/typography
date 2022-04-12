import ArrowBtn from "../components/uikit/ArrowBtn/ArrowBtn";
import BtnNext from "../components/uikit/BtnNext/BtnNext";
import Button2 from "../components/uikit/Button2/Button2";
import Button4 from "../components/uikit/Button4/Button4";
import CloseBtn from "../components/uikit/CloseBtn/CloseBtn";
import FooterLink from "../components/uikit/FooterLink/FooterLink";
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
      <Button2>Обратная связь</Button2>
      <Button4>Показать ещё</Button4>
      <FooterLink href="/">Ссылка</FooterLink>
    </>
  );
}
