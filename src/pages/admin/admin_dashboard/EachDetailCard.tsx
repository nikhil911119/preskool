type Props = {
  id: number;
  iconUrl: string;
  total: number;
  name: string;
  active: number;
  inactive: number;
  tabColor: string;
};

const EachDetailCard = (props: Props) => {
  const percentage = Math.floor((props.inactive / props.total) * 100);
  const color =  () => {
    var tabcol =props.tabColor;

    return tabcol;
  };

  return (
    <div className="card p-[1.25rem] shadow-lg w-[18rem]">
      <div className="card-top flex justify-between pb-3 border-b-2">
        <div className="total flex">
          <img src={props.iconUrl} alt="icon" className="border p-2 h-[70px] w-[70px]" />
          <div className="ml-2">
            <span className="block font-bold text-[24px]">{props.total}</span>
            <span className="block text-[#6A7287]">Total {props.name}</span>
          </div>
        </div>
        <div>
          <span
            className={`bg-[${props.tabColor}] text-white py-1 px-2 rounded-[5px] font-semibold text-[10px]`}
          >
            {percentage}%
          </span>
        </div>
      </div>
      <div className="card-bottom p-3 flex justify-between pb-0">
        <p className="text-[#6A7287]">
          Active:&nbsp;{" "}
          <span className="font-bold text-[#202C4B]">{props.active} </span>
        </p>
        <span className="text-[#E9EDF4]">|</span>
        <p className="text-[#6A7287]">
          Inactive:{" "}
          <span className="font-bold text-[#202C4B]">{props.inactive} </span>
        </p>
      </div>
    </div>
  );
};

export default EachDetailCard;
