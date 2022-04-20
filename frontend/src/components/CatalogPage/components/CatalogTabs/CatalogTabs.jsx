import React, { useState, useEffect, Component } from "react";
import Tab from "../../../uikit/Tab/Tab";
import s from "./CatalogTabs.module.scss";
import cs from "classnames";
import { Scrollbars } from "react-custom-scrollbars";

export default function CatalogTabs({ className }) {
  const [isActive, setIsActive] = useState(0);

  useEffect(() => {
    setIsActive((prev) => prev + 1);
  }, []);
  return (
    Boolean(isActive) && (
      <ColoredScrollbars
        className={cs(s.container, className)}
        key={isActive + 1}
      >
        <Tab className={s.tab} isActive={true}>
          Брошюровка и переплёт
        </Tab>
        <Tab className={s.tab}>Визитки</Tab>
        <Tab className={s.tab}>Календари</Tab>
        <Tab className={s.tab}>Копирование, сканирование</Tab>
        <Tab className={s.tab}>Ламинирование</Tab>
        <Tab className={s.tab}>Листовки и буклеты</Tab>
        <Tab className={s.tab}>Печать</Tab>
        <Tab className={s.tab}>Печати и штампы</Tab>
        <Tab className={s.tab}>Таблички</Tab>
        <Tab className={s.tab}>Фото на документы</Tab>
      </ColoredScrollbars>
    )
  );
}

class ColoredScrollbars extends Component {
  constructor(props, ...rest) {
    super(props, ...rest);
    this.state = { left: 0, clientWidth: 0, scrollLeft: 0 };
    this.renderView = this.renderView.bind(this);
    this.renderThumb = this.renderThumb.bind(this);
    this.renderTrackHorizontal = this.renderTrackHorizontal.bind(this);
    this.onScrollFrame = this.onScrollFrame.bind(this);
  }

  onScrollFrame(value) {
    this.setState({
      left: value.left,
      clientWidth: value.clientWidth,
      scrollLeft: value.scrollLeft,
    });
  }

  renderView({ style, ...props }) {
    return <div className={s.tabs} {...props} />;
  }

  renderThumb({ style, ...props }) {
    const { left, clientWidth, scrollLeft } = this.state;
    const thumbStyle = {
      display: "block",
      backgroundColor: `#056AC7`,
      borderRadius: "2px",
      height: "2px",
      maxWidth: "48px",
      transform: `translateX(${left === 0 ? 0 : left * clientWidth - 48}px)`,
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  }

  renderTrackHorizontal({ style, ...props }) {
    const trackStyle = {
      width: "100%",
      backgroundColor: "#EAE8E8",
      height: "2px",
      borderRadius: "2px",
      bottom: 0,
      left: 0,
      display: "block",
    };
    return (
      <div className={s.track} style={{ ...style, ...trackStyle }} {...props} />
    );
  }

  render() {
    return (
      <Scrollbars
        renderView={this.renderView}
        renderThumbHorizontal={this.renderThumb}
        renderThumbVertical={this.renderThumb}
        renderTrackHorizontal={this.renderTrackHorizontal}
        thumbSize={48}
        onScrollFrame={this.onScrollFrame}
        {...this.props}
      />
    );
  }
}
