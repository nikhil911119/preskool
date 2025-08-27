import React from "react";
type Props = {
  imageUrl: string;
  parentsId: string;
  parentsName: string;
  addedDate: Date;
  childName: string[];
};
const ParentsDetailCard: React.FC<Props> = ({
  imageUrl,
  parentsId,
  parentsName,
  addedDate,
  childName,
}: Props) => {
  return (
    <>
      <div className="card flex items-center gap-[10px] bg-[#202C4B] p-[20px] rounded-[5px]">
        <div className="image-wrapper">
          <img
            src={imageUrl}
            alt=""
            className="h-[80px] aspect-square rounded-[5px]"
          />
        </div>
        <div className="details">
          <span className=" inline-block mb-[4px] parents-id text-red-500 bg-[white] text-[10px] font-[700] px-[7px] py-[4px] rounded-[4px] leading-none tracking-[0.5px]">
            {parentsId}
          </span>
          <h2 className="text-white text-[18px] font-[600]">{parentsName}</h2>

          <span className="text-[#CDD0D7]">
            Added on: {addedDate.toDateString()}
            {" | "}
          </span>
          <span className="text-[#CDD0D7]">
            Child: {childName.join(", ")}
          </span>
        </div>
      </div>
    </>
  );
};

export default ParentsDetailCard;
