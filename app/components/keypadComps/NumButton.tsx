import "./keypad.css";

interface INumButton {
  number: number;
}

function NumButton({ INumButton }: INumButton): JSX.Element {
  return (
    <div className="numPad">
      <div className="highlight-top"> </div>
      <div className="highlight-left"> </div>
      <div className="allButtons">
        <div className="leftButtons">
          <div className="topBtn btn">
            <div className="inner">
              <p>
                <span className="material-symbols-outlined">toolbar</span>
              </p>
            </div>
          </div>
          <div className="leftTop">
            <div className="btn backspace">
              <div className="inner">
                <p>
                  <span className="material-symbols-outlined">backspace</span>
                </p>
              </div>
            </div>
            <div className="btn forward-slash">
              <div className="inner">
                <p>/</p>
              </div>
            </div>
            <div className="btn star">
              <div className="inner">
                <p>*</p>
              </div>
            </div>
            <div className="btn seven">
              <div className="inner">
                <p>7</p>
              </div>
            </div>
            <div className="btn eigth">
              <div className="inner">
                <p>8</p>
              </div>
            </div>
            <div className="btn nine">
              <div className="inner">
                <p>9</p>
              </div>
            </div>
            <div className="btn four">
              <div className="inner">
                <p>4</p>
              </div>
            </div>
            <div className="btn five">
              <div className="inner">
                <p>5</p>
              </div>
            </div>
            <div className="btn six">
              <div className="inner">
                <p>6</p>
              </div>
            </div>
            <div className="btn one">
              <div className="inner">
                <p>1</p>
              </div>
            </div>
            <div className="btn two">
              <div className="inner">
                <p>2</p>
              </div>
            </div>
            <div className="btn three">
              <div className="inner">
                <p>3</p>
              </div>
            </div>
          </div>

          <div className="leftBottom">
            <div className="btn zero">
              <div className="inner">
                <p>0</p>
              </div>
            </div>
            <div className="btn period">
              <div className="inner">
                <p>.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rightButtons">
          <div className="logo">
            <div className="squares">
              <div className="square1"></div>
              <div className="square2"></div>
              <div className="square3"></div>
              <div className="square4"></div>
            </div>
          </div>
          <div className="btn minus">
            <div className="inner">
              <p>-</p>
            </div>
          </div>
          <div className="btn plus">
            <div className="inner">
              <p>+</p>
            </div>
          </div>
          <div className="btn enter">
            <div className="inner">
              <p>Enter</p>
            </div>
          </div>
        </div>
        <div className="highlight-right"> </div>
      </div>

      <div className="highlight-bottom"> </div>
    </div>
  );
}

export default NumButton;
