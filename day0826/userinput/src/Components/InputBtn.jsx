import * as React from "react";
import PropTypes from "prop-types";
import { Button, buttonClasses } from "@mui/base/Button";
import { styled } from "@mui/system";

const ButtonRoot = React.forwardRef(function ButtonRoot(props, ref) {
  const { children, ...other } = props;

  return (
    <button
      {...other}
      ref={ref}
      style={{ marginTop: "22px", background: "none", border: "none", padding: 0 }}
    >
      <svg width="80" height="33">
        <polygon points="0,33 0,0 80,0 80,33" className="bg" />
        <polygon points="0,33 0,0 80,0 80,33" className="borderEffect" />
        <foreignObject x="0" y="0" width="80" height="33">
          <div className="content">{children}</div>
        </foreignObject>
      </svg>
    </button>
  );
});

ButtonRoot.propTypes = {
  children: PropTypes.node,
};

const SvgButton = React.forwardRef(function SvgButton(props, ref) {
  return <Button {...props} slots={{ root: CustomButtonRoot }} ref={ref} />;
});

export default function InputBtn({onClick}) {
  return <SvgButton onClick={onClick}>입력</SvgButton>;
}

export function ListBtn({onClick}) {
  return <SvgButton onClick={onClick}>목록보기</SvgButton>;
}

export function EditBtn({ onClick }) {
  return <SvgButton onClick={onClick}>수정</SvgButton>;
}

export function DeleteBtn({ onClick }) {
  return <SvgButton onClick={onClick}>삭제</SvgButton>;
}

const gray = {
  50: "#F0F0F0",
  100: "#D9D9D9",
  200: "#B3B3B3",
  400: "#808080",
  500: "#666666",
  600: "#4D4D4D",
  700: "#333333",
  800: "#1A1A1A",
  900: "#000000",
};

const CustomButtonRoot = styled(ButtonRoot)(
  ({ theme }) => `
  overflow: visible;
  cursor: pointer;
  --main-color: ${theme.palette.mode === "light" ? gray[600] : gray[200]};
  --hover-color: ${theme.palette.mode === "light" ? gray[50] : gray[900]};
  --active-color: ${theme.palette.mode === "light" ? gray[100] : gray[800]};

  & polygon {
    fill: transparent;
    transition: all 800ms ease;
    pointer-events: none;
  }

  & .bg {
    stroke: var(--main-color);
    stroke-width: 1;
    filter: drop-shadow(0 4px 16px rgba(0, 0, 0, 0.1));
    fill: transparent;
  }

  & .borderEffect {
    stroke: var(--main-color);
    stroke-width: 2;
    stroke-dasharray: 120 600;
    stroke-dashoffset: 120;
    fill: transparent;
  }

  &:hover,
  &.${buttonClasses.focusVisible} {
    .borderEffect {
      stroke-dashoffset: -600;
    }

    .bg {
      fill: var(--hover-color);
    }
  }

  &:focus,
  &.${buttonClasses.focusVisible} {
    outline: 2px solid ${theme.palette.mode === "dark" ? gray[700] : gray[200]};
    outline-offset: 2px;
  }

  &.${buttonClasses.active} {
    & .bg {
      fill: var(--active-color);
      transition: fill 150ms ease-out;
    }
  }

  & foreignObject {
    pointer-events: none;

    & .content {
      font-size: 0.75rem; /* 폰트 크기를 약간 줄임 */
      font-family: 'IBM Plex Sans', sans-serif;
      font-weight: 600;
      line-height: 1.5;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--main-color);
      padding: 2px; 
      
    }

    & svg {
      margin: 0 2px;
    }
  }`
);
