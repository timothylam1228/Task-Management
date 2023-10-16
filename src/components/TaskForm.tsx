import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import categories from "../categories"; // Import your categories array.
import "./task.css";
import { useDispatch } from "react-redux";
import { addItem } from "../features/taskSlice";
const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  dueDate: Yup.date().required("Due date is required"),
  category: Yup.string().required("Category is required"),
});

const TaskForm = (props: { setOpen: (open: boolean) => void }) => {
  const { setOpen } = props;
  const dispatch = useDispatch();
  const initialValues = {
    title: "",
    dueDate: "",
    category: "",
  };

  const handleSubmit = (
    values: { title: string; dueDate: string; category: string },
    {
      resetForm,
    }: {
      resetForm: (arg0: {
        title: string;
        dueDate: string;
        category: string;
      }) => void;
    }
  ) => {
    // Handle form submission here (e.g., save the task to your database or state).
    console.log(values);
    dispatch(addItem(values));
    resetForm(initialValues); // Reset the form after submission.
    setOpen(false); // Close the form.
  };

  return (
    <div className="bg-gray-700 absolute top-12 md:top-36 w-full md:w-1/2 py-10 mx-auto left-0 right-0 border-2 shadow-lg rounded-3xl">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        // handleBlur={() => setOpen(!open)}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="task-form flex items-center justify-center flex-col mx-12 ">
            <div className="mb-6 w-full ">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Title
              </label>
              <Field
                type="title"
                id="title"
                name="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Title"
              />
              <ErrorMessage name="title" component="div" className="error" />
            </div>
            <div className="mb-6 w-full">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Due Date
              </label>
              <div className=" relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <Field
                  type="date"
                  name="dueDate"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <ErrorMessage
                  name="dueDate"
                  component="div"
                  className="error"
                />
              </div>
            </div>
            <div className="mb-6 w-full">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Category
              </label>
              <Field
                as="select"
                name="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="category" component="div" className="error" />
            </div>
            <div className="flex justify-around w-full">
              <button type="submit" className="w-fit text-white">
                Add Task
              </button>
              <div
                onClick={() => setOpen(false)}
                className="w-fit text-white cursor-pointer"
              >
                Close
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TaskForm;
