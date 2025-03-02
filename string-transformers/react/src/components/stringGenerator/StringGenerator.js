import "./StringGenerator.css";

const StringGenerator = (props) => {
  return (
    <section className='stringGenerator'>
      <div>
        <label>{props.caseType}</label>
      </div>
      <p>{props.caseString}</p>
    </section>
  );
};

export default StringGenerator;
