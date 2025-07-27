interface Props {
  img: string;
  onClick(): void;
}
const ImageCard = ({ img, onClick }: Props) => {
  return (
    <div onClick={onClick} className="col-span-1 relative group/parent overflow-hidden">
      <img src={img} className="w-full" alt="" />
      <div className="absolute bg-blue-600/60 top-full left-0 right-0 -bottom-full flex justify-center items-center text-5xl group-hover/parent:inset-0 transition-all duration-500 ">
        <i className="fa-solid fa-plus"></i>
      </div>
    </div>
  );
};

export default ImageCard;
