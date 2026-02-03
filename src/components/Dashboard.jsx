import Navbar from "../components/Navbar";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import Footer from "../components/Footer";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="max-w-xl mx-auto p-5">
        <h2 className="text-2xl font-bold mb-4">My Todo List</h2>
        <TodoForm />
        <TodoList />
      </div>
      <Footer />
    </>
  );
}
