import React, { Component } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import Tab from "../uikit/Tab/Tab";
import s from "./ProjectTabs.module.scss";

export default function ProjectTabs({ tabs, activeTab, handleSelect }) {
  return (
    <ColoredScrollbars className={s.content}>
      <Tab
        className={s.tab}
        isActive={activeTab === null ? true : false}
        onClick={() => {
          handleSelect((prev) => null);
        }}
      >
        Все
      </Tab>

      {tabs &&
        tabs.map((item) => {
          return (
            <Tab
              key={item.id}
              className={s.tab}
              isActive={activeTab === item.id ? true : false}
              onClick={() => {
                handleSelect(item.id);
              }}
            >
              {item.typeProjectName}
            </Tab>
          );
        })}
    </ColoredScrollbars>
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
    return <div className={s.container} {...props} />;
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
    return (
      <div className={s.thumb} style={{ ...style, ...thumbStyle }} {...props} />
    );
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
        universal={true}
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
