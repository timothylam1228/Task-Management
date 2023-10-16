import { useAppSelector } from "../app/hook";
import { useDispatch } from "react-redux";
import { removeItem } from "../features/taskSlice";
const TaskList = () => {
  const list = useAppSelector((state) => state.list);
  const dispatch = useDispatch();

  //

  const handleRemove = (id: string) => {
    console.log("remove", id);
    dispatch(removeItem(id));
    console.log("removed");
  };

  return (
    <div className="flex flex-col task-list-container w-full items-center justify-center">
      <h2 className="pt-12">Task List</h2>
      <div className="bg-gray-700 flex flex-col items-center text-white md:top-36 w-full md:w-1/2 py-10 mx-auto left-0 right-0 border-2 shadow-lg rounded-3xl">
        <table className="w-full">
          <tbody className="w-full">
            <tr className="justify-around flex">
              <th className="flex-1 text-center">Title</th>
              <th className={`flex-1 text-center `}>Due Date</th>
              <th className="flex-1 text-center">Category</th>
              <th className="flex-1 text-center">Remove</th>
            </tr>
            {list.map((item) => {
              return (
                <tr key={item.id} className="w-full flex">
                  <td className="flex-1 text-center">{item.title}</td>
                  <td className="flex-1 text-center">
                    {item.dueDate.toString()}
                  </td>
                  <td className="flex-1 text-center">{item.category}</td>
                  <td
                    onClick={() => handleRemove(item.id)}
                    className="flex-1 text-center cursor-pointer hover:text-black"
                  >
                    O
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default TaskList;
