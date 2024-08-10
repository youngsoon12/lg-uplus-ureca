import * as React from "react";

interface IAppProps {}

const styles: { wrapper: React.CSSProperties; messageText: React.CSSProperties } = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    border: "1px solid grey",
    borderRadius: 16,
  },
  messageText: {
    color: "black",
    fontSize: 30,
  },
};

export default function Notification(props: IAppProps) {
  return (
    <div style={styles.wrapper}>
      <span style={styles.messageText}>안녕, state~!!</span>
    </div>
  );
}
