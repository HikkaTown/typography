import AddFileBtn from "../components/uikit/AddFileBtn/AddFileBtn";
import AddressCard from "../components/uikit/AddressCard/AddressCard";
import ArrowBtn from "../components/uikit/ArrowBtn/ArrowBtn";
import BtnNext from "../components/uikit/BtnNext/BtnNext";
import Button2 from "../components/uikit/Button2/Button2";
import Button4 from "../components/uikit/Button4/Button4";
import CatalogItem from "../components/uikit/CatalogItem/CatalogItem";
import CloseBtn from "../components/uikit/CloseBtn/CloseBtn";
import DescriptionTech from "../components/uikit/DescriptionTech/DescriptionTech";
import DropdownTech from "../components/uikit/DropdownTech/DropdownTech";
import FooterLink from "../components/uikit/FooterLink/FooterLink";
import OfficeDropdown from "../components/uikit/OfficeDropdown/OfficeDropdown";
import PlayBtn from "../components/uikit/PlayBtn/PlayBtn";
import ProjectCard from "../components/uikit/ProjectCard/ProjectCard";
import RadioBtn from "../components/uikit/RadioBtn/RadioBtn";
import StepBtn from "../components/uikit/StepBtn/StepBtn";
import StepCardItem from "../components/uikit/StepCardItem/StepCardItem";
import Tab from "../components/uikit/Tab/Tab";
import TabProductBtn from "../components/uikit/TabProductBtn/TabProductBtn";
import TrashBtn from "../components/uikit/TrashBtn/TrashBtn";
import YellowBtn from "../components/uikit/YellowBtn/YellowBtn";

export default function Index() {
  return (
    <>
      <RadioBtn />
      <RadioBtn isChecked={true} />
      <PlayBtn />
      <OfficeDropdown />
      <TrashBtn />
      <DropdownTech />
      <DescriptionTech />
      <BtnNext />
      <ArrowBtn />
      <CloseBtn />
      <Tab isActive={true}>Широкоформатная печать</Tab>
      <Tab>Широкоформатная печать</Tab>
      <YellowBtn>В каталог услуг</YellowBtn>
      <Button2>Обратная связь</Button2>
      <Button4>Показать ещё</Button4>
      <FooterLink href="/">Ссылка</FooterLink>
      <StepBtn>1</StepBtn>
      <StepCardItem
        inCart={true}
        data={{
          src: "https://www.ixbt.com/img/n1/news/2021/10/2/22459ff25f8eff76bddf34124cc2c85b16f4cd4a_large.jpg",
          name: "Товар",
          price: 3213,
        }}
      />
      <StepCardItem
        data={{
          src: "https://www.ixbt.com/img/n1/news/2021/10/2/22459ff25f8eff76bddf34124cc2c85b16f4cd4a_large.jpg",
          name: "Товар",
          price: 0,
        }}
      />
      <ProjectCard />
      <TabProductBtn>ООО, ОАО ,ЗАО</TabProductBtn>
      <AddFileBtn />
      <AddressCard />
      <CatalogItem />
    </>
  );
}
