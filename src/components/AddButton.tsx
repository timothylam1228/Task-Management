const AddButton = (props: {
  setOpen: (open: boolean) => void;
  open: boolean;
}) => {
  const { setOpen, open } = props;
  return (
    <div className="bg-red-400 rounded-full items-center justify-center w-fit absolute m-auto bottom-20 right-20">
      <button
        className=" text-3xl rounded-full w-10 h-10 z-10"
        onClick={() => setOpen(!open)}
        // onClick={() => console.log("open")}
      >
        +
      </button>
    </div>
  );
};

export default AddButton;
