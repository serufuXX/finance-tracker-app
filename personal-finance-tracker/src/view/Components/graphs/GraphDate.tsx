interface IGraphDate {
    date : Date
}

const GraphDate = (props : IGraphDate)   => {
    const {
        date,
    } = props
    return (
        <div className="p-6 bg-inherit rounded-2xl shadow-sm border">
        <p className="text-lg font-semibold">Graphic {date.toLocaleDateString()}</p>
      </div>
    );
  };
  
  export default GraphDate;