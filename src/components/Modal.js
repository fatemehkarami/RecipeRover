import "./Modal.css";
const Modal = (props) => {
  return (
    props.showModal && (
      <div className="modal-out">
        <div
          className="modal-box"
          style={{
            borderStyle: "solid",
            borderColor: props.mode === "discount" ? "black" : "orange",
            borderWidth: "4px",
          }}
        >
          {props.children}
          <p>
            sakjdbjsa asjdsj asjdjsa jahbsdhjasj asjhdse jshdsde sdhyuew
            jhsdyuwe sjhduyew syuwgeds jahsbdywue jhsbdyuwe sdyugwe jhasbdyuw
            jhdyegw jhsbdyuew jhsabdwuy jhsdyew jhsbdywe jshbeuwy jhasbdyw
            haswyu ajhsbdw jhweby jahsdby jsahgdyuw jahdbgyuqw jshdeuw jsdhquyw
            sjkdehw
          </p>
          <a href="www.google.com">find out more</a>
          <br></br>
          <button
            onClick={props.handelShowOrHideModal}
            className={
              props.mode === "discount" ? "black-class" : "orange-class"
            }
          >
            close
          </button>
        </div>
      </div>
    )
  );
};

export default Modal;
