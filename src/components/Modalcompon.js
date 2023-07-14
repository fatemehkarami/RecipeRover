import "../styles/modal.css";
const Modalcompon = (props) => {
  return (
    <div className="modal-out">
      <div className="modal-box">
        <h2>{props.children}</h2>
        <p>
          sakjdbjsa asjdsj asjdjsa jahbsdhjasj asjhdse jshdsde sdhyuew jhsdyuwe
          sjhduyew syuwgeds jahsbdywue jhsbdyuwe sdyugwe jhasbdyuw jhdyegw
          jhsbdyuew jhsabdwuy jhsdyew jhsbdywe jshbeuwy jhasbdyw haswyu ajhsbdw
          jhweby jahsdby jsahgdyuw jahdbgyuqw jshdeuw jsdhquyw sjkdehw
        </p>
        <a href="www.google.com">find out more</a>
        <br></br>
        <button>close</button>
      </div>
    </div>
  );
};

export default Modalcompon;
