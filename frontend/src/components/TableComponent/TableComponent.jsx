import React, { Component } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import s from "./TableComponent.module.scss";

export default function TableComponent({ data }) {
  return (
    <ColoredScrollbars className={s.container}>
      <table className={s.table}>
        <thead className={s.head_line}>
          <tr>
            {data.headers.map((item, index) => (
              <TableHeadItem key={index} item={item} />
            ))}
          </tr>
        </thead>
        <tbody>
          {data.items.map((item, index) => {
            return <TableRow key={index} data={item.items} />;
          })}
        </tbody>
      </table>
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
      width: "calc(100% - 10px)",
      backgroundColor: "#EAE8E8",
      height: "2px",
      borderRadius: "2px",
      bottom: 5,
      left: "50%",
      transform: "translateX(-50%)",
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
        universal={true}
        onScrollFrame={this.onScrollFrame}
        {...this.props}
      />
    );
  }
}

const TableHeadItem = ({ item }) => {
  return (
    <td className={s.head} title={item}>
      {item}
    </td>
  );
};

const TableRow = ({ data }) => {
  return (
    <tr className={s.row_line}>
      {data.map((item, index) => {
        return (
          <td className={s.row_item} key={index}>
            {item}
          </td>
        );
      })}
    </tr>
  );
};
