import React, { useState, useEffect, Component } from "react";
import Tab from "../../../uikit/Tab/Tab";
import s from "./CatalogTabs.module.scss";
import cs from "classnames";
import { Scrollbars } from "react-custom-scrollbars";

export default function CatalogTabs({ className }) {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") setIsActive(true);
  }, []);
  return (
    isActive && (
      <ColoredScrollbars className={cs(s.container, className)}>
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
    // this.state = { left: 0 };
    this.renderView = this.renderView.bind(this);
    this.renderThumb = this.renderThumb.bind(this);
    this.renderTrackHorizontal = this.renderTrackHorizontal.bind(this);
    // this.onScrollFrame = this.onScrollFrame.bind(this);
  }

  // onScrollFrame(value) {
  //   const left = value.left;
  //   this.setState({ left });
  // }

  renderView({ style, ...props }) {
    return <div className={s.tabs} style={{ ...style }} {...props} />;
  }

  renderThumb({ style, ...props }) {
    // const { left } = this.state;
    const thumbStyle = {
      backgroundColor: `#056AC7`,
      borderRadius: "2px",
      height: "2px",
      maxWidth: "48px",
    };
    return <div className={s.thumb} style={{ ...style }} {...props} />;
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
        renderTrackHorizontal={this.renderTrackHorizontal}
        // onUpdate={this.handleUpdate}
        // onScrollFrame={this.onScrollFrame}
        thumbSize={48}
        {...this.props}
      />
    );
  }
}
